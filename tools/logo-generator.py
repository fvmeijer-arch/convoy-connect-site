# Generates the Convoy Connect logo set as SVG.
import sys, os
OUT = sys.argv[1]
NAVY, RED, WHITE = '#223A7E', '#BD3029', '#FFFFFF'
S = 28          # letter stroke
h = S/2         # centerline inset
G = 14          # letter gap
LINE2 = 124     # second line offset
r = 50 - h      # radius of round letters

def C(w):  return w, f'M{w-12} {h}H50A{r} {r} 0 0 0 50 {100-h}H{w-12}'
def O(w):  return w, f'M50 {h}H{w-50}A{r} {r} 0 0 1 {w-50} {100-h}H50A{r} {r} 0 0 1 50 {h}Z'
DG = S*1.25     # horizontal thickness of diagonals
def N(w):
    return w, f'M0 0H{S}V100H0ZM{w-S} 0H{w}V100H{w-S}ZM0 0H{DG}L{w} 100H{w-DG}Z', 'fill'
def V(w):
    m = w/2
    return w, f'M0 0H{DG}L{m+DG/2} 100H{m-DG/2}ZM{w-DG} 0H{w}L{m+DG/2} 100H{m-DG/2}Z', 'fill'
def Y(w):
    m = w/2; j = 56
    return w, (f'M0 0H{DG}L{m+DG/2} {j}H{m-DG/2}ZM{w-DG} 0H{w}L{m+DG/2} {j}H{m-DG/2}Z'
               f'M{m-DG/2} {j-2}H{m+DG/2}V100H{m-DG/2}Z'), 'fill'
def E(w):  return w, f'M{h} -10V110M0 {h}H{w}M0 50H{w-10}M0 {100-h}H{w}'
def T(w):  return w, f'M0 {h}H{w}M{w/2} -10V110'
PLUS = 'plus'

# Every letter gets the same width, so the two lines form one grid:
# each letter of CONVOY sits exactly above the matching letter of CONNECT.
CELL = 118
line1 = [C(CELL), O(CELL), N(CELL), V(CELL), O(CELL), Y(CELL)]
line2 = [C(CELL), O(CELL), N(CELL), N(CELL), E(CELL), C(CELL), T(CELL)]

def wordmark(ink, accent):
    parts = []
    for row, letters in ((0, line1), (LINE2, line2)):
        x = 0; d = []; plus = ''
        f = []
        for w, path, *kind in letters:
            if kind:
                f.append(f'<path transform="translate({x} 0)" d="{path}"/>')
            elif path == PLUS:
                plus = (f'<path transform="translate({x} 0)" d="M35 0h30v35h35v30H65v35H35V65H0V35h35z" fill="{accent}"/>')
            else:
                d.append(f'<path transform="translate({x} 0)" d="{path}"/>')
            x += w + G
        parts.append(f'<g transform="translate(0 {row})"><g clip-path="url(#row)" fill="none" stroke="{ink}" stroke-width="{S}" stroke-linejoin="miter" stroke-miterlimit="10">{"".join(d)}</g><g fill="{ink}">{"".join(f)}</g>{plus}</g>')
    return ''.join(parts)

def width(letters): return sum(l[0] for l in letters) + G*(len(letters)-1)
WM_W = max(width(line1), width(line2))

# Mark: two C-shaped chain links, each hooked through the other's opening.
import math
MS = 40                     # link stroke
R = 65                      # link end radius (centerline)
B = R + MS/2                # left arc centre of link 1 (keeps the outer edge at 0)
CXR = B + 88                # right arc centre of link 1
DX, DY = 120, 65            # offset of link 2
GAP = 35                    # half-angle of the opening, degrees
gx, gy = R*math.cos(math.radians(GAP)), R*math.sin(math.radians(GAP))
def link(ox, oy):
    cy = B + oy; l = B + ox; r = CXR + ox
    return (f'M{r+gx:.2f} {cy-gy:.2f}A{R} {R} 0 0 0 {r} {cy-R}H{l}'
            f'A{R} {R} 0 0 0 {l} {cy+R}H{r}A{R} {R} 0 0 0 {r+gx:.2f} {cy+gy:.2f}')
L1, L2 = link(0, 0), link(DX, DY)
CROSS_X, CROSS_Y = B - R + DX, B + R          # where link 2's left side crosses link 1's lower arm
MARK_W, MARK_H = CXR + DX + R + MS/2, B + DY + R + MS/2
def mark(c1, c2, uid='m'):
    # link 2 passes over link 1 at the crossing: knock a gap out of link 1 there
    return (f'<defs><mask id="{uid}" maskUnits="userSpaceOnUse" x="-50" y="-50" width="600" height="400">'
            f'<rect x="-50" y="-50" width="600" height="400" fill="#fff"/>'
            f'<path d="M{CROSS_X} {CROSS_Y-40}V{CROSS_Y+40}" stroke="#000" stroke-width="{MS+16}"/></mask></defs>'
            f'<g fill="none" stroke-width="{MS}">'
            f'<path stroke="{c1}" d="{L1}" mask="url(#{uid})"/>'
            f'<path stroke="{c2}" d="{L2}"/>'
            '</g>')

DEFS = '<defs><clipPath id="row"><rect x="-20" y="0" width="2000" height="100"/></clipPath></defs>'

def svg(w, h, body, title='Convoy Connect'):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">'
            f'<title>{title}</title>{DEFS}{body}</svg>\n')

LOCK_GAP = 56
def lockup(ink, c1, c2, accent):
    MW = MARK_W*224/MARK_H
    return svg(round(MW + LOCK_GAP + WM_W), 224,
               f'<g transform="scale({224/MARK_H:.4f})">{mark(c1, c2)}</g><g transform="translate({MW+LOCK_GAP:.1f} 0)">{wordmark(ink, accent)}</g>')

files = {
    'logo.svg': lockup(NAVY, NAVY, RED, RED),
    'logo-white.svg': lockup(WHITE, WHITE, RED, RED),
    'mark.svg': svg(MARK_W, MARK_H, mark(NAVY, RED), 'Convoy Connect mark'),
    'mark-white.svg': svg(MARK_W, MARK_H, mark(WHITE, RED), 'Convoy Connect mark'),
    'favicon.svg': svg(256, 256, f'<rect width="256" height="256" rx="56" fill="{NAVY}"/><g transform="translate({(256-MARK_W*0.62)/2} {(256-MARK_H*0.62)/2}) scale(0.62)">{mark(WHITE, RED)}</g>', 'Convoy Connect'),
    'logo-stacked.svg': svg(WM_W, MARK_H + 72 + 224,
        f'<g transform="translate({(WM_W-MARK_W)/2} 0)">{mark(NAVY, RED)}</g><g transform="translate(0 {MARK_H+72})">{wordmark(NAVY, RED)}</g>'),
}
os.makedirs(OUT, exist_ok=True)
for name, content in files.items():
    open(os.path.join(OUT, name), 'w').write(content)
print('mark', MARK_W, MARK_H, 'wordmark', WM_W)
