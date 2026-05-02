import requests, json, sys, base64, os

OPENAI_KEY = "sk-proj-[REDACTED]"
OA_HEADERS = {"Authorization": f"Bearer {OPENAI_KEY}", "Content-Type": "application/json"}

PROMPT = (
    "A single perfectly smooth black obsidian orb floating in an infinite white void, "
    "positioned high in frame in the upper two-thirds, centered horizontally. "
    "The orb fills approximately 35% of frame width. Mirror-grade gloss surface with a "
    "structured grid-lattice highlight in the upper hemisphere — 4 to 6 curved segments "
    "like cathedral window panes on a black pearl, reading dark silver-gray with deep black seams. "
    "Lower hemisphere near-pure black. Soft all-directional diffused studio light, no harsh shadows, "
    "no visible horizon line. Infinite professional cyclorama white background. "
    "Complete stillness. Photorealistic. Cinema-grade quality. Ex Machina minimalist aesthetic. "
    "Shot on ARRI ALEXA 65 with ARRI Signature Prime 35mm lens. Volumetric lighting. Lonely liminal mood."
)

OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "SHT-00088-generated.png")

def try_model(model, extra={}):
    payload = {"model": model, "prompt": PROMPT, "n": 1, "size": "1024x1024", **extra}
    print(f"\nTrying {model}...")
    r = requests.post("https://api.openai.com/v1/images/generations", headers=OA_HEADERS, json=payload, timeout=90)
    print(f"  Status: {r.status_code}")
    if r.status_code != 200:
        print(f"  Error: {r.text[:300]}")
        return None
    return r.json()

# Try gpt-image-1 with b64 output first
data = try_model("gpt-image-1", {"output_format": "png"})

# Fall back to dall-e-3 with URL
if not data:
    data = try_model("dall-e-3", {"response_format": "url", "quality": "hd"})

if not data:
    print("\nBoth models failed — likely no paid credits on this key.")
    sys.exit(1)

item = data["data"][0]
b64  = item.get("b64_json")
url  = item.get("url")

if b64:
    print(f"\nDecoding base64 image...")
    img_bytes = base64.b64decode(b64)
    with open(OUTPUT_PATH, "wb") as f:
        f.write(img_bytes)
    print(f"Saved to: {OUTPUT_PATH}")
    print(f"Size: {len(img_bytes):,} bytes")
    print("RESULT:B64")

elif url:
    print(f"\nDownloading from URL: {url[:80]}...")
    img = requests.get(url, timeout=30)
    with open(OUTPUT_PATH, "wb") as f:
        f.write(img.content)
    print(f"Saved to: {OUTPUT_PATH}")
    print(f"Size: {len(img.content):,} bytes")
    print("RESULT:URL")
