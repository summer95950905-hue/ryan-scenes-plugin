---
name: ryan-scenes-v2-2
description: "Transform a user-supplied photo into an independently compelling Ryan scenes v2.2 paper poster without asking preference questions or invoking an interaction UI. Retain truthful photographic material as a visual anchor while building an artistic proposition, one central emotional or conceptual tension, purposeful source-consistent invention, and one interpretive opening. Preserve source orientation by default with a 3:5 portrait output or 5:3 landscape output, and use no fixed photo-to-illustration area ratio. Use Standard Accent Mode for one art-directed high-chroma hue, or support the exact `单色块模式` trigger for one contiguous saturated field with remaining printed forms in neutral ink. Choose an adaptive source-derived edge treatment, including the option of a natural isolated contour with no visible torn effect. Preserve people, perspective, light, color, and scene identity; add no new text, unrelated scenery, or template decoration."
---

# Ryan scenes v2.2

Create an independently compelling, tactile paper-poster artwork from a supplied photo. Treat the photograph as both a truthful visual anchor and creative stimulus. The result should stand on its own as an authored artwork rather than read as a conservative photo layout. Preserve the signature **命题为核、真景为锚、情绪成势、插画再构、色彩成事、边缘应景**:

- establish one source-specific artistic proposition, one central tension, and one interpretive opening;
- keep people, identity, pose, perspective, real light, and natural color truthful;
- let the scene determine the photographic share; impose no fixed minimum, maximum, or preset photo-to-illustration ratio;
- reconstruct the paper field from the source image's colors rather than defaulting to large white or cream areas;
- recompose, simplify, exaggerate, and invent with purpose while keeping additions source-consistent;
- compress foliage, branches, leaves, crowds, texture, and other complex detail into a few quiet graphic forms;
- preserve the source orientation with 3:5 portrait or 5:3 landscape output unless the user requests another ratio;
- use Standard Accent Mode by default, or exact-trigger Solid Color-Block Mode when the user writes `单色块模式`;
- choose one adaptive source-derived edge treatment; a visible torn edge is optional rather than mandatory;
- use restrained, interrupted sketch and drypoint lines; add no new text, sticker-like elements, or template decoration;
- do not place any preference gate before generation; honor relevant direction already supplied by the user and proceed.

Return the generated image plus one brief creative rationale by default. Include the final prompt or detailed composition notes only when the user explicitly asks for them.

## Decision Priority

Resolve conflicts in this order:

1. Establish one specific artistic proposition and embody it visibly.
2. Build one central emotional or conceptual tension from the source.
3. Create a complete artwork with an independent aesthetic voice.
4. Preserve the source's semantic nucleus, emotional provenance, human identity and pose, perspective, key spatial relationships, and real light and color.
5. Recompose, simplify, exaggerate, and invent with purpose while keeping every addition source-consistent.
6. Allocate photography and illustration by expressive need and visual weight, never by a numeric area quota.
7. Establish figure–ground clarity, hierarchy, balance, and a deliberate eye path.
8. Make edge, material, color, and space serve the proposition; preserve one interpretive opening.
9. Apply the requested color mode faithfully and use high chroma with purpose.
10. Keep the result tactile, flat, poetic, non-commercial, and free of added text or template decoration.

Preserve relationships before details. Remove detail before adding decoration.

## Standing Consent and Privacy

- Treat a supplied reference photo plus a request to make, transform, or continue a poster as consent to use image generation; do not ask again.
- Send only the final prompt and required reference image(s) to the image-generation service.
- Do not browse, search, save, commit, upload elsewhere, or share the user's source material.
- Do not introduce unrelated personal information. Preserve the visible identity and recognizable features of photographed people rather than generalizing them.
- Do not save source or generated images into project files unless the user asks.

## Build the Distillation Card

Inspect the photo before composing. Resolve:

- **Semantic nucleus:** the smallest subject, relationship, or event that gives the source meaning.
- **Core subject:** one primary subject, or at most two inseparable subjects.
- **Human fidelity:** for each visible person, identity-defining features, pose, body direction, gaze, gesture, scale, and overlap that must survive.
- **Supporting elements:** one to three elements that establish place, season, action, or atmosphere.
- **Dominant gesture:** the strongest gaze, lean, curve, diagonal, path, repetition, convergence, or movement.
- **Spatial invariants:** horizon, relative positions, scale, perspective, facing direction, path, silhouette, overlap, or another relationship that must survive.
- **Visual-weight map:** weight from area, darkness, saturation, faces, isolation, edge tension, and texture.
- **Native palette:** dominant hue family, temperature, value range, and any meaningful minor color.
- **Material and weather:** water, snow, haze, glass, foliage, stone, fabric, wind, rain, or light behavior.
- **Emotional residue:** the feeling that remains after factual description is removed.
- **Discard list:** background detail, clutter, redundant objects, and realistic information that should disappear.
- **Transformation opportunities:** forms that can be enlarged, merged, fragmented, repeated, displaced, or turned into negative space.
- **Photographic footprint:** a full scene, irregular field, connected fragments, person, local water area, building cluster, or other focused extraction sized only by expressive and compositional need.
- **Source-consistent vocabulary:** visible scene elements plus plausible supporting forms that extend its place, season, action, atmosphere, emotion, rhythm, or spatial logic.

Treat the photograph as factual evidence and creative stimulus. Preserve only the anchors required for identity, scene recognition, and the artistic proposition; do not preserve the original composition by default.

## Expression Engine

Build the artwork through this chain:

```text
source fact → emotional residue → expressive proposition → central tension → formal embodiment → interpretive opening
```

### Expressive Proposition

Write one internal sentence stating what the artwork asks the viewer to feel, notice, or reconsider. Make it relational and source-specific. Avoid generic labels such as “quiet,” “healing,” “nostalgic,” “dreamy,” or “beautiful” unless the visible structure explains why that feeling exists.

### Central Tension

Choose one primary opposition that exists or can credibly emerge from the source, such as intimacy/distance, shelter/confinement, movement/stillness, smallness/vastness, warmth/coldness, memory/disappearance, order/growth, visibility/concealment, or permanence/fragility. Optionally use one subordinate tension. Express it through scale, interval, direction, overlap, enclosure, interruption, temperature, value, or material contrast rather than explanatory copy.

### Formal Embodiment

Make scale and space, direction and rhythm, boundary and edge, color, and material each perform part of the proposition. Remove any element whose only function is to make the image look artistic.

### Interpretive Opening

Resolve the artwork's emotional direction but leave one relationship unanswered. Let ambiguity arise from meaningful omission, obstruction, scale shift, incomplete action, or an image–space gap rather than random obscurity.

## Authorial Reinterpretation

Use the source as a starting point, not a fixed layout. Allow purposeful recomposition, changes of scale, proportion, crop, spacing, orientation, and placement; merging, splitting, repeating, extending, or rhythmically compressing elements; deleting secondary background information; exaggerating gesture, distance, direction, silhouette, or material behavior; turning wind, water, light, shadow, snow, or motion into abstract fields; and inventing source-consistent supporting forms that were not literally visible.

Every invented addition must extend the source emotion, clarify a subject relationship, establish rhythm, balance visual weight, guide the eye, or strengthen the proposition. Remove additions that merely make the result look designed. Preserve human identity and pose, source perspective, defining spatial relationships, and scene credibility throughout the reinterpretation.

## Photo-Specific Prompt Compiler

Resolve these visible fields in order:

1. **Canvas:** source-responsive 3:5 portrait or 5:3 landscape ratio, source-colored paper surface, flat scan, and absence of mockup framing.
2. **Expression and attention geometry:** artistic proposition, central tension, interpretive opening, dominant field, subordinate field, focal area, quiet area, and eye path.
3. **Scene invariants:** semantic nucleus, identity, pose, perspective, real light and color, and exact relationships that must remain recognizable.
4. **Photo–illustration allocation:** which field remains visibly photographic and which parts become paper illustration. Use no numeric photo-area or illustration-area target. It is valid to retain the full scene, only a person, a local area of water, a building cluster, another focal extraction, or connected fragments whenever that choice preserves the semantic nucleus and required invariants.
5. **Authorial rewrite:** which source forms will be enlarged, merged, fragmented, repeated, displaced, omitted, or extended, and which source-consistent supporting forms may be invented for a clear expressive purpose.
6. **Abstraction map:** what to retain, merge, omit, transform, and leave blank.
7. **Illustration field:** source-consistent content, primary grammar, field extent, active printed density, complexity-compression target, restrained broken sketch/drypoint marks, and source-colored quiet areas.
8. **Color mode:** Standard Accent Mode or exact-trigger Solid Color-Block Mode; exact hue, source relation, value, chroma, material, area, adjacency, expressive role, and mode-specific exclusions.
9. **Edge treatment:** one primary source-derived treatment and, only if useful, one subordinate treatment; allow a natural isolated contour with no visible torn effect.
10. **Reproduction texture:** paper fibers, grain, ink behavior, scan noise, and flat lighting.
11. **Mood and hard avoids:** emotional temperature, no-added-text rule, and prohibited aesthetics.

Compile only instructions that can become visible pixels. Do not include design-theory explanations, file paths, metadata, or analysis notes in the final generation prompt.

## Minimal Abstraction Engine

### Editorial Abstraction

Use editorial abstraction by default:

- preserve the semantic nucleus, dominant gesture, human identity and pose, and one key spatial relationship;
- remove roughly 65–90% of nonessential descriptive detail from illustrated regions;
- merge repeated or adjacent forms into larger masses;
- replace realistic shading with flat ink, broken contour, sparse hatching, halftone, or paper cutout;
- depart from literal scale or crop when the scene remains credible and recognizable;
- keep at least one unmistakable source-specific feature.

Do not define or infer a separate abstraction-strength setting. Let the artistic proposition, central tension, semantic nucleus, and fidelity requirements determine each transformation directly.

### Build the Abstraction Map

For every illustrated section, decide:

- **Retain:** keep no more than 1–2 defining forms or relationships.
- **Merge:** combine repeated trees, railings, windows, waves, crowds, or architectural detail into one rhythm or silhouette.
- **Omit:** remove secondary objects, surface detail, clutter, and redundant contours.
- **Transform:** convert selected forms into a flat silhouette, broken contour, geometric cutout, ink field, or repeated mark.
- **Expose:** deliberately leave quiet source-colored paper around and within forms; do not default to white.

Do not reproduce every object visible in the photo. Do not create a full-scene tracing with vintage texture applied on top.

### Choose One Primary Illustration Grammar

Choose one grammar according to the source:

- **Silhouette-led:** one broad dark or gray mass carries the subject; use for figures, trees, roofs, boats, or strong profiles.
- **Contour-led:** a few broken lines preserve direction and relationship; use for architecture, paths, railings, coastlines, or gestures.
- **Field-led:** one irregular ink or halftone field implies atmosphere; use for water, fog, sky, shadow, or ground.
- **Rhythm-led:** repeated marks compress recurring elements; use for posts, windows, waves, branches, steps, or crowds.
- **Cut-paper-led:** one or two simplified organic or geometric cutouts carry the scene; use when the source has a strong shape hierarchy.

Use only one primary grammar and at most one supporting grammar. Do not combine every print process in one illustration.

### Compress Dense Foliage and Organic Detail

Increase simplification when the source becomes visually intricate. Dense trees, pine needles, leaves, vines, grass, flowers, hair-like branches, crowds, gravel, and similar micro-texture must become calmer in illustration than they are in photography.

- For a foliage-dominant illustrated area, retain one main canopy or tree mass, one to three directional branch gestures, no more than two secondary clusters, and one sparse texture sample.
- Omit roughly 85–95% of individual leaves, needles, fine twigs, overlapping branchlets, and repeated organic marks.
- Use silhouette-led or cut-paper-led grammar by default for trees and foliage. Use rhythm-led marks only as a sparse supporting trace, never as the primary carpet of detail.
- Represent leaves or needles as grouped masses, broken lobes, clipped shadow shapes, or short interrupted rhythms; do not draw them one by one.
- Preserve the source-specific lean, canopy opening, branch direction, or light gap instead of preserving botanical detail.
- If the source contains several overlapping trees or shrubs, merge them into one dominant mass and at most one subordinate counter-mass.
- If the illustration reads as lace, filigree, coral, dense engraving, or a full botanical print at thumbnail size, merge forms and remove marks rather than merely fading them.

Complexity in the photograph is a reason to simplify more, not a reason to print more.

### Control Illustration Density

- Separate **field extent** from **printed density**. The illustration may influence a large portion of the poster while remaining selectively printed.
- Build quiet areas from low-detail colors, light, atmosphere, water, wall, vegetation, or architecture found in the source; quiet does not mean white.
- Do not leave a large white or generic cream void. Use a source-derived wash, fiber tone, halftone, drybrush, or screenprint field when a broad low-information area is needed.
- For foliage-dominant or highly intricate scenes, use one dominant mass, one to three directional gestures, at most two secondary clusters, and one restrained texture field.
- Use no more than two neutral ink values besides the source-derived paper colors and the single high-chroma structural hue.
- Prefer incomplete edges, interrupted contours, cropped forms, and internal breathing room over fully enclosed detailed objects.
- Use restrained, discontinuous sketch or drypoint marks. Keep any permitted edge speckles or ghost marks confined to the photo–illustration transition; do not scatter them as filler.

Make the illustrated field large enough to carry the composition before making it more detailed. For dense organic scenes, enlarge masses while reducing the number of marks. The result should read clearly at thumbnail size and still feel intentionally unfinished at normal size.

## Scene Fidelity in Abstraction

Preserve scene identity through:

- the relative position and direction of the core subjects;
- the dominant horizon, path, shoreline, gaze, or silhouette;
- one or two source-specific shapes;
- the original visual tension between heavy and quiet areas.

The illustration may simplify texture and minor descriptive detail. It may not alter a person's identity or pose, contradict the source perspective, invent unrelated scenery, or replace the original spatial logic with generic motifs. Source-consistent supporting forms may be invented only when they extend the source emotion, clarify a relationship, establish rhythm, balance visual weight, guide the eye, or strengthen the proposition.

## Composition System

Preserve source orientation unless the user requests another ratio:

- use a vertical 3:5 canvas for a portrait source;
- use a horizontal 5:3 canvas for a landscape source;
- use a vertical 3:5 canvas when the source is square, absent, or ambiguous.

Treat orientation as part of the source's spatial logic. Recompose freely inside the selected canvas; do not preserve the photographic framing by default.

Set no minimum or maximum percentage for either photography or illustration. Photography may dominate, share the poster with illustration, or survive as a person, local water area, building cluster, other focused extraction, or connected fragments. Judge allocation by the artistic proposition, semantic nucleus, scene credibility, hierarchy, and visual weight—not by area calculation.

Choose a composition family from the source geometry:

- **Asymmetric island:** an off-center photographic and/or illustrated cluster surrounded by breathing room.
- **Torn window:** an irregular boundary contains the main forms while one element escapes.
- **Directional drift:** forms extend along a gaze, path, wind, shoreline, or movement vector.
- **Rhythmic circulation:** repeated source-consistent elements create an open loop or current.
- **Staggered fragments:** two or three separated fields establish sequence and interval.
- **Vertical tension:** a low or high subject mass is counterbalanced by a distant mark or field.
- **Auxiliary constellation:** a source-consistent supporting element disperses around the core subject as unequal visual beats.

Apply figure–ground clarity, asymmetric balance, dominant–subordinate hierarchy, optical rather than mechanical centering, Gestalt continuation and closure, scale and interval contrast, directional breathing room, and an eye path with a clear entry, encounter, movement, and quiet exit. Treat composition families as starting grammars, not templates.

## Transition Edge Director

Choose one primary treatment from source geometry, material mood, and the artistic proposition. The primary choice may be a quiet natural isolation with no visible transition effect. Add at most one subordinate treatment when it clarifies depth, movement, or transition.

- **Torn-fiber edge:** irregular exposed fibers and broken contours divide or connect photography, illustration, and paper.
- **Layered grayscale edge:** two or three narrow irregular neutral bands create shallow material separation without cast shadow.
- **Stippled dissolution:** sparse dots, halftone flecks, or broken grain loosen the edge along source movement.
- **Irregular mark edge:** one to three small source-derived shapes continue rhythm or direction.
- **Natural isolated contour:** a person, local water area, building cluster, or other necessary photographic/illustrated form meets the paper through its own organic silhouette without a torn rim, stipple field, halo, border, or other visible transition device.

Align the treatment with a source-derived horizon, gesture, path, pressure, material change, coastline, waterline, canopy, architecture, or directional break. Use positive and negative shapes, allow internal paper gaps, and let zero to two selected forms cross the boundary when useful. Keep depth tactile, flat-scanned, and subordinate to the proposition.

When using torn fiber, keep it irregular and source-colored, preserve natural photographic color beside it, and move outward through a materially gradual halftone, drybrush, or screenprint transition. When using natural isolation, keep the contour organic and restrained without turning it into a sticker or hard digital cutout.

Avoid a generic ripped rectangle, applying all treatments together, rectangular photo pasting, uniform white borders, decorative symbol scattering, scrapbook layering, tape, floating paper, heavy shadows, curled paper, bevels, and realistic 3D depth.

## Color Mode Policy

Use **Standard Accent Mode** by default. Switch to **Solid Color-Block Mode** only when the user's request contains the exact trigger:

```text
单色块模式
```

Do not infer this mode merely because the image or desired poster is minimal.

Before selecting a hue, resolve its visual role, source relationship, value contrast, chroma, paper-native material, area, and adjacency. Do not default to blue, red, or any fixed palette. Choose the exact hue that best serves the source, composition, emotional temperature, artistic proposition, and eye path.

### Standard Accent Mode

Keep the paper and most printed forms subdued, then use one unmistakable high-chroma hue. Choose it through source resonance, analogous harmony, temperature counterpoint, or focused complement. Give it one primary role: focal entry, counterweight, bridge, spatial field, directional cue, or rhythmic beat.

Keep the total high-chroma area around 0.8–3% of the full poster or 10–30% of the active cluster. Use one main accent and optionally one or two subordinate echoes; keep all echoes together below 25% of the total accent area. Preserve high chroma through grain, ink bite, broken coverage, or slight misregistration without making it neon or glossy.

Use a **Distributed Supporting Accent** only when the source contains a meaningful repeatable element such as flowers, leaves, fruit, birds, lights, stones, windows, or tools. Redraw several unequal instances in one exact hue to establish entry, circulation, counterweight, and exit. Do not invent a dispersed motif without a credible source relation or arrange it as confetti, a border, or an even pattern.

### Solid Color-Block Mode

When `单色块模式` is triggered, use exactly three color categories:

1. the natural or source-derived paper tone;
2. one unified achromatic or near-neutral ink system for every non-photographic outline, object, and texture;
3. exactly one contiguous, fully saturated color field.

Render all non-accent printed forms in charcoal, graphite, warm gray, brown-black, or off-black. Do not add supporting chromatic tints. Use one connected opaque high-chroma shape occupying roughly 3–12% of the full poster or 25–65% of the active cluster. Derive it from the semantic nucleus, dominant gesture, or strongest figure–ground opportunity and make it the visual entry or central spatial idea, never a detached swatch. Natural colors in retained photographic material may remain truthful; do not recolor the photograph into the neutral ink system.

Mentally remove the high-chroma element. If balance, movement, figure–ground, continuity, tension, or meaning remains essentially unchanged, redesign it. Color must act as an emotional and compositional event rather than decoration.

## Visual Language

- Preserve source orientation by default: 3:5 portrait for portrait, square, absent, or ambiguous sources; 5:3 landscape for landscape sources; follow a user-requested ratio when provided.
- Reconstruct the paper from the photograph's own color atmosphere using matte fibers, restrained speckles, weathering, torn edges, scan noise, and flat print texture; do not default to a large white or cream ground.
- Preserve each person's identity and pose, the photograph's perspective, natural light and color, and recognizable geometry.
- Render the illustration with selective woodcut, photocopy, halftone, xerox, risograph, letterpress, or cut-paper treatment.
- Let photography, illustration, and chromatic structure share at least one source-derived contour, axis, rhythm, or field.
- Keep paper texture subordinate to the source-derived forms and source-colored breathing room.
- Use only restrained, broken sketch and drypoint lines as supporting marks.
- Ensure every invented illustrated element outside the photographic region remains source-consistent and performs a clear expressive or compositional job.
- Keep the result flat and orthographic with diffuse light and no artificial 3D depth.
- Add no new words, letters, captions, labels, numbers, pseudo-metadata, or typographic decoration. Existing text physically present in the source photo may remain only when required for scene fidelity.

## No Added Text

Do not generate any new text or typographic element. This prohibition overrides the former micro-text convention and applies even when an editorial trace might otherwise suit the composition. If the source photograph already contains signage, lettering, or numbers, preserve them only as part of the truthful photographed scene; do not isolate, restyle, repeat, extend, or use them as decoration.

## Prompt Shape

Write the final prompt as five compact sections:

1. **Expression and visible consequence:** artistic proposition, central tension, interpretive opening, and the visible formal choices that embody them.
2. **Canvas and attention geometry:** source-responsive 3:5 portrait or 5:3 landscape ratio, source-colored paper, dominant and quiet fields, hierarchy, and eye path.
3. **Truthful anchor and authorial rewrite:** semantic nucleus, retained photographic material, identity and pose, perspective, real light and color, preserved spatial invariants, omissions, purposeful source-consistent inventions, and editorial abstraction grammar. State explicitly that photography and illustration use no fixed area ratio.
4. **Edge and color mode:** selected primary edge treatment and optional subordinate treatment; exact hue, emotional action, material, position, area, and mode-specific exclusions. In Solid Color-Block Mode, specify one connected saturated field and neutral ink for all other printed forms.
5. **Reproduction and hard avoids:** paper/scan texture, emotional temperature, no-added-text rule, and prohibited aesthetics.

Use decisive language. State which details must disappear as clearly as which forms must remain.

## Generation Workflow

1. Inspect the supplied photo without presenting a preference gate or asking follow-up questions.
2. Detect source orientation and choose 3:5 portrait or 5:3 landscape unless the user requests another ratio.
3. Build the Distillation Card.
4. Write one source-specific artistic proposition.
5. Choose one central emotional or conceptual tension.
6. Define the interpretive opening: what remains deliberately unresolved.
7. Detect the exact `单色块模式` trigger; otherwise use Standard Accent Mode.
8. Select the source anchors, human-fidelity invariants, and discard list.
9. Define one authorial transformation and admit only supporting inventions with a clear source-consistent purpose.
10. Choose the composition family and allocate photography and illustration without any fixed area ratio. It is valid to retain a full scene, person, local water area, building cluster, other extraction, or connected fragments.
11. Build the Abstraction Map and choose one primary illustration grammar plus at most one supporting grammar.
12. Choose one primary edge treatment and, only if useful, one subordinate treatment; allow Natural Isolated Contour when no visible transition effect best serves the work.
13. Resolve the Color Decision and make the high-chroma hue perform an emotional and compositional action.
14. Compile the five-section prompt, generate with the supplied photo as reference, and add no new text.
15. Inspect at normal and thumbnail scale; regenerate once with a targeted correction only when necessary.
16. Return the generated image plus one brief creative rationale; include the prompt or detailed notes only when requested.

## Targeted Correction

Regenerate at most once, correcting only the observed failure:

- **Weak proposition:** make one source-specific artistic proposition visible through scale, space, direction, edge, color, or material; remove competing ideas.
- **Flat tension:** strengthen one central opposition through interval, enclosure, interruption, temperature, value, or material contrast.
- **Closed interpretation:** restore one meaningful unresolved relationship through omission, obstruction, scale shift, incomplete action, or image–space gap.
- **Identity, pose, perspective, or light/color drift:** restore the photographed person's recognizable features and posture, the source viewpoint, and the real illumination and palette.
- **Photographic anchor lost:** restore enough truthful photographic detail to recover the focal subject, identity, or defining spatial relationship; adjust by meaning and balance rather than percentage.
- **Scene loss:** restore the missing spatial invariant or source-specific form; replace unrelated invention with a purposeful source-consistent supporting form.
- **Over-literal illustration:** remove most remaining nonessential detail, merge forms, break contours, and enlarge source-colored breathing room.
- **Dense foliage:** collapse individual leaves, needles, and fine twigs into one main mass, one to three branch gestures, and at most two secondary clusters.
- **Generic abstraction:** replace invented motifs with a simplified source-derived form or relationship.
- **Crowding:** reduce the illustration to one primary mass, one supporting mark, and one texture field.
- **Illustration too timid:** enlarge the field or dominant mass without adding descriptive detail.
- **Weak hierarchy:** enlarge the dominant field or simplify the subordinate field.
- **Generic composition:** redesign from the photograph's own space, gesture, and emotion instead of reusing a centered or templated layout.
- **Arbitrary boundary:** replace the edge with one treatment justified by source geometry, material mood, and the artistic proposition.
- **Abrupt or digital transition:** use a source-derived torn, layered, stippled, irregular-mark, or natural-isolation treatment; remove rectangular masks, uniform white borders, and digital-mask softness.
- **Edge noise:** keep one primary edge treatment, remove competing residue, and restore source-colored quiet paper.
- **Decorative color:** replace the detached mark with a source-derived continuation, replacement, underprint, counterform, or directional rhythm; make it pass the structural removal test.
- **Unanchored hue:** reconsider source resonance, analogous harmony, temperature counterpoint, or focused complement; select one exact hue whose role and adjacency strengthen the proposition and eye path.
- **Broken color mode:** in Standard Accent Mode, restore one high-chroma system with restrained echoes; in Solid Color-Block Mode, restore one contiguous saturated field and neutral ink for every other printed form.
- **Chromatic dominance:** reduce area, opacity, or competing echoes while preserving the color's compositional function.
- **Added text or decoration:** remove all newly generated words, labels, numbers, stickers, and template ornaments.
- **Damaged photography:** restore natural color, texture, perspective, and recognizable detail.

## Hard Avoids

Avoid changing human identity or pose; changing source perspective, real light, or color; losing the semantic nucleus; allocating photo and illustration by a reusable numeric formula; generic mood labels without visible embodiment; several competing propositions or tensions; random ambiguity; unrelated invention; additions without an expressive or compositional job; literal traced illustration; exact composition copying; individual leaf-by-leaf rendering; dense branch filigree; evenly detailed woodcut; dense continuous hatching; complete object outlines; generic abstract motifs; arbitrary dots, grids, corner blocks, circles, swatches, or decorative scattering; color chosen by a fixed fallback palette; multiple competing high-chroma systems; rectangular photo pasting; clean digital masks; uniform white borders; sticker outlines; generic ripped rectangles; using every edge treatment together; large white or generic cream grounds; decorative deckled frames; tape; heavy shadows; curled paper; dense scrapbooking; multiple competing illustration styles; commercial advertising hierarchy; any new text, captions, labels, numbers, logos, CTA, or faux metadata; glossy mockups; neon; 3D; cinematic lighting; depth of field; fashion-editorial drama; cute cartoon, kawaii, anime, or children's-book treatment; excessive sharpening; AI smoothing; template decoration; and watermarks. In Solid Color-Block Mode, additionally avoid supporting color tints, multiple colored fields, separated accent echoes, and a color field that reads as a detached decorative swatch.

## Output Format

By default, return:

```markdown
![Ryan scenes v2.2 poster](absolute-image-path-or-rendered-image)

**创作思路**

[One short Chinese paragraph explaining the artistic proposition, central tension, retained photographic anchor, main authorial transformation, color/material action, and interpretive opening.]
```

Keep the creative rationale to one compact paragraph, usually 1–3 sentences. Describe the central visual decision and emotional intention in plain language; do not reveal the full prompt, restate every parameter, or turn it into a technical checklist.

If the user explicitly requests the prompt or detailed explanation, add only the requested items. Composition notes may use:

- Expression: [artistic proposition / central tension / interpretive opening]
- Layout: [composition family / source-responsive orientation / photographic anchor / illustration field / source-colored quiet field]
- Eye path: [entry → photographic anchor → chromatic/illustrated passage → quiet exit]
- Authorship: [retain / merge / omit / transform / source-consistent invention / expressive purpose]
- Color: [mode / source relationship / exact hue / material / function / approximate area / exclusions]
- Edge: [primary treatment / optional subordinate treatment / source geometry / expressive role]

## Quality Gate

Before returning, verify:

- Did generation proceed without any preference gate or follow-up question?
- Is one source-specific artistic proposition visibly embodied?
- Does one central emotional or conceptual tension organize the composition?
- Does one meaningful relationship remain interpretively open without becoming random ambiguity?
- Does the result still read as the supplied scene?
- Are the semantic nucleus and key spatial relationship recognizable?
- Are each visible person's identity and pose, the source perspective, and the real light and color truthful?
- Were both photographic and illustrated areas chosen without any fixed minimum, maximum, or preset ratio?
- If only a person, local water, a building cluster, or another extraction remains photographic, does it still preserve the semantic nucleus and required invariants?
- Does the illustration reinterpret rather than trace the source?
- Does every invented form remain source-consistent and perform a clear expressive or compositional job?
- Has most nonessential detail been removed?
- Is there one primary illustration grammar?
- Does the canvas preserve source orientation unless the user requested another ratio?
- Was the composition family chosen from source geometry and adjusted by actual visual weight rather than a template?
- Does the illustration carry the composition instead of appearing as a timid peripheral doodle?
- In foliage-dominant scenes, were most leaves, needles, fine twigs, and repeated organic marks merged or omitted?
- Does foliage resolve as a few large masses and directional branch gestures rather than dense filigree?
- Are sketch and drypoint lines restrained, broken, and discontinuous?
- Does source-colored breathing room clarify the forms without creating a large white or generic cream void?
- Do photography, illustration, and color share a source-derived contour, axis, rhythm, field, emotion, or proposition?
- Was one primary edge treatment chosen from source geometry, material mood, and expressive purpose?
- If no visible transition effect was chosen, does the natural isolated contour remain organic, restrained, and free of sticker-like clipping?
- If torn, layered, stippled, or irregular marks were used, are they materially coherent and subordinate to the artwork?
- Is the boundary free of rectangular pasting, uniform white borders, clean digital clipping, digital-mask softness, sticker outlines, heavy shadows, and artificial curled-paper depth?
- Is the eye path coherent?
- Was the color mode selected correctly, with Solid Color-Block Mode used only for the exact `单色块模式` trigger?
- Does the exact high-chroma hue follow source relation, value, chroma, material, adjacency, proposition, and eye-path needs rather than a fixed fallback palette?
- In Standard Accent Mode, is there one high-chroma system with only restrained echoes or one credible distributed supporting accent?
- In Solid Color-Block Mode, is there one contiguous saturated field and one unified neutral ink system for all other printed forms?
- Would removing the color weaken balance, movement, figure–ground, tension, continuity, or meaning?
- Is the color structurally useful without becoming a detached sticker or dominant advertising device at thumbnail size?
- Is there no newly generated text, lettering, caption, label, number, sticker, or template decoration?
- Does the poster remain tactile, flat, quiet, abstract, source-derived, and non-commercial?
- Did the response include the image and one genuinely brief creative rationale?
- Was the full prompt omitted unless the user explicitly requested it?
