from PIL import Image, ImageDraw, ImageFont
import os

BASE = "C:/Users/viole/Desktop/Biz Folder/Exo Biz/EXO-HTML/DOCUMENTATION/Business/Brand/Characters"

SHEET_W, SHEET_H = 2000, 1200
BG = (235, 235, 233)       # warm neutral gray ~#EBEBEB
LABEL_BG = (20, 20, 20)
WHITE = (255, 255, 255)
GRAY = (160, 160, 160)

DEPARTMENTS = [
    {
        "name": "Flow OS",
        "keyword": "Foundation",
        "color_name": "Deep Navy Blue",
        "hex": "#0D1B4A → #1A2F6E",
        "role": "The operational skeleton. Always running. Everything depends on it.",
        "folder": "Flow-OS",
        "images": ["Flow-OS.png"],
    },
    {
        "name": "Deal OS",
        "keyword": "Momentum",
        "color_name": "Vivid Emerald Green",
        "hex": "#047857 → #10b981",
        "role": "Revenue operations. The pipeline that never sleeps. The closer that never forgets.",
        "folder": "Deal OS",
        "images": ["Deal-OS.png", "Deal-OS-2.png"],
    },
    {
        "name": "Exo Academy",
        "keyword": "Clarity",
        "color_name": "Clear Sky Blue",
        "hex": "#3B82F6 → #60A5FA",
        "role": "Institutional knowledge. Team training. The onboarding that runs itself.",
        "folder": "EXA",
        "images": ["EXA.png"],
    },
    {
        "name": "AURA AI",
        "keyword": "Perception",
        "color_name": "Electric Violet",
        "hex": "#5B21B6 → #7C3AED",
        "role": "Talent intelligence. AI-powered candidate filtering. The eye that sees what others miss.",
        "folder": "AURA",
        "images": ["AURA-AI.png"],
    },
    {
        "name": "Exo Launch",
        "keyword": "Projection",
        "color_name": "Coral Orange",
        "hex": "#EA580C → #F97316",
        "role": "Marketing operations. Demand generation. The campaign that runs overnight.",
        "folder": "Exo Launch",
        "images": ["Exo Launch.png"],
    },
    {
        "name": "Exo Concierge",
        "keyword": "Vigilance",
        "color_name": "Silver Pearl (Ring Form)",
        "hex": "#CBD5E1 → #E2E8F0",
        "role": "Always-on operations monitoring. The immune system. The watcher.",
        "folder": "Exo Concierge",
        "images": ["Concierge.png"],
    },
]

def load_orb(folder, filename, target_h):
    path = os.path.join(BASE, folder, filename)
    img = Image.open(path).convert("RGBA")
    ratio = target_h / img.height
    return img.resize((int(img.width * ratio), target_h), Image.LANCZOS)

def make_sheet(dept):
    sheet = Image.new("RGB", (SHEET_W, SHEET_H), BG)
    draw = ImageDraw.Draw(sheet)

    imgs = dept["images"]
    orb_h = 820
    padding = 60

    # Load orb images
    orbs = []
    for fn in imgs:
        try:
            orbs.append(load_orb(dept["folder"], fn, orb_h))
        except Exception as e:
            print(f"  Warning: could not load {fn}: {e}")

    # Position orbs
    total_orb_w = sum(o.width for o in orbs) + padding * (len(orbs) - 1)
    x_start = (SHEET_W - total_orb_w) // 2
    y_orb = (SHEET_H - orb_h) // 2 - 30

    for orb in orbs:
        sheet.paste(orb, (x_start, y_orb), orb)
        x_start += orb.width + padding

    # Try to load a font, fall back to default
    try:
        font_lg = ImageFont.truetype("C:/Windows/Fonts/Arial.ttf", 52)
        font_md = ImageFont.truetype("C:/Windows/Fonts/Arial.ttf", 30)
        font_sm = ImageFont.truetype("C:/Windows/Fonts/Arial.ttf", 24)
        font_kw = ImageFont.truetype("C:/Windows/Fonts/Arialbd.ttf", 36)
    except:
        font_lg = font_md = font_sm = font_kw = ImageFont.load_default()

    # Top label bar
    draw.rectangle([0, 0, SHEET_W, 90], fill=LABEL_BG)
    draw.text((padding, 20), f"EXO ENTERPRISE  —  CHARACTER REFERENCE", font=font_sm, fill=GRAY)

    # Department name
    draw.text((padding, 110), dept["name"].upper(), font=font_lg, fill=LABEL_BG)

    # Keyword pill
    kw_text = dept["keyword"].upper()
    kw_bbox = draw.textbbox((0, 0), kw_text, font=font_kw)
    kw_w = kw_bbox[2] - kw_bbox[0] + 32
    kw_h = kw_bbox[3] - kw_bbox[1] + 16
    kw_x = SHEET_W - kw_w - padding
    draw.rounded_rectangle([kw_x, 112, kw_x + kw_w, 112 + kw_h], radius=6, fill=LABEL_BG)
    draw.text((kw_x + 16, 120), kw_text, font=font_kw, fill=WHITE)

    # Bottom info bar
    info_y = SHEET_H - 130
    draw.rectangle([0, info_y, SHEET_W, SHEET_H], fill=LABEL_BG)
    draw.text((padding, info_y + 18), dept["color_name"].upper(), font=font_md, fill=WHITE)
    draw.text((padding, info_y + 58), dept["hex"], font=font_sm, fill=GRAY)
    draw.text((padding + 600, info_y + 18), dept["role"], font=font_sm, fill=GRAY)

    # Divider line under name
    draw.line([(padding, 180), (SHEET_W - padding, 180)], fill=(200, 200, 198), width=1)

    out_path = os.path.join(BASE, dept["folder"], f"{dept['name']} Character Sheet.png")
    sheet.save(out_path, "PNG")
    print(f"  Saved: {out_path}")
    return out_path

print("Building character reference sheets...")
for dept in DEPARTMENTS:
    print(f"\n{dept['name']}:")
    make_sheet(dept)

print("\nAll done.")
