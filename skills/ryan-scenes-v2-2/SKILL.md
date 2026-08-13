---
name: ryan-scenes-v2-2
description: "Transform a user-supplied photo directly into a vertical 3:5 Ryan scenes v2.2 poster without asking preference questions or invoking an interaction UI. Infer the narrative focus, photographic scope, and abstraction strength from the photograph, and let the composition determine the photographic area without any fixed minimum or maximum percentage. Preserve truthful people, perspective, light, color, and scene identity while extending the same scene through source-colored paper illustration. Use exactly one high-chroma structural hue derived from the primary visual focus, with saturated red or blue as the fallback when no usable focal color is readable. Use restrained broken sketch and drypoint marks plus a hand-torn fibrous opening that follows the scene's own coast, waterline, canopy, or architecture. Use when the user wants an immediate tactile source-derived zine without added text, rectangular photo pasting, uniform white borders, unrelated scenery, or template decoration."
---

# Ryan scenes v2.2

Create a calm, tactile poster from a supplied photo. The rules in this document implement the current version; where an older convention conflicts, the current rules below take priority. Preserve the signature **叙事定焦、真景为锚、插画同场、色彩成结构、撕纸成界**:

- identify the photograph's narrative focus before making any composition decision;
- infer narrative focus, photographic scope, and abstraction strength from the supplied image and proceed directly without a preference gate;
- keep people, identity, pose, perspective, real light, and natural color truthful;
- let the scene determine the photographic share; impose no fixed minimum, maximum, or preset photo-to-illustration ratio;
- reconstruct the paper field from the source image's colors rather than defaulting to large white or cream areas;
- let the abstract illustration reinterpret only elements from the same scene instead of tracing them or inventing adjacent scenery;
- compress foliage, branches, leaves, crowds, texture, and other complex detail into a few quiet graphic forms;
- use exactly one high-chroma structural hue per image, derive it from the primary visual focus when possible, and use saturated red or blue when no usable focal color is readable;
- design a visible hand-torn fibrous opening from the narrative focus and source geometry while preserving the scene's semantic minimum;
- use restrained, interrupted sketch and drypoint lines; add no new text, sticker-like elements, or template decoration;
- choose a different composition language for each photograph according to its space, dominant gesture, and emotion.

Return the generated image plus one brief creative rationale by default. Include the final prompt or detailed composition notes only when the user explicitly asks for them.

## Decision Priority

Resolve conflicts in this order:

1. Identify and preserve the photograph's narrative focus.
2. Preserve the identity and pose of people, the source perspective, the key spatial relationships, and the real light and color.
3. Allocate photography and illustration by narrative need and visual weight, never by a numeric area quota.
4. Design the torn opening from the focal subject and a real coast, waterline, canopy, architectural edge, horizon, path, or silhouette without losing the scene's semantic minimum.
5. Keep all illustration outside the photographic region inside the same depicted scene.
6. Reconstruct the non-photographic paper field from the source palette and avoid large white or generic cream areas.
7. Simplify complex organic or repetitive detail into a few large legible masses and directional gestures.
8. Build photography, illustration, and exactly one high-chroma structural hue on the same source-derived compositional skeleton; derive the hue from the primary visual focus or use the red/blue fallback rule.
9. Let the source photo remain fully colored near the tear, then transition gradually into halftone, drybrush, or screenprint.
10. Keep sketch and drypoint marks restrained and interrupted; add no text, stickers, or template decoration.

Preserve relationships before details. Remove detail before adding decoration.

## Standing Consent and Privacy

- Treat a supplied reference photo plus a request to make, transform, or continue a poster as consent to use image generation; do not ask again.
- Send only the final prompt and required reference image(s) to the image-generation service.
- Do not browse, search, save, commit, upload elsewhere, or share the user's source material.
- Do not introduce unrelated personal information. Preserve the visible identity and recognizable features of photographed people rather than generalizing them.
- Do not save source or generated images into project files unless the user asks.

## Read the Photograph First

Build an internal **Scene Card**:

- **Narrative focus:** who or what carries the story, what is happening, and which emotional or spatial tension must lead the composition.
- **Core subjects:** the 1–2 elements that make the scene identifiable.
- **Human fidelity:** for each visible person, identity-defining features, pose, body direction, gaze, gesture, scale, and overlap that must survive.
- **Supporting elements:** 2–3 elements that establish place or atmosphere.
- **Spatial invariants:** horizon, relative positions, scale, perspective, facing direction, path, silhouette, or overlap that must survive.
- **Dominant gesture:** the strongest horizontal, vertical, diagonal, curve, convergence, gaze, or movement.
- **Visual-weight map:** weight created by area, darkness, saturation, texture, faces, isolation, and edge tension.
- **Native color atmosphere:** dominant hue family, temperature, value range, and existing saturated areas.
- **Focal color cue:** the clearest meaningful color on or immediately around the primary visual focus that can be intensified into the structural hue; mark it unreadable when it is neutral, ambiguous, obscured, or too weak to anchor the composition.
- **Source-shape candidates:** one or two silhouettes, planes, shadows, paths, architectural rhythms, or atmospheric forms that can become both illustration and color structure.
- **Photographic footprint:** one irregular photographic field, a connected set of fragments, or a focused extraction sized only by narrative and compositional need.
- **Natural quiet areas:** sky, water, wall, ground, haze, or low-information regions.
- **Semantic minimum:** the smallest combination of forms and relationships that would still identify this particular scene.
- **Same-scene vocabulary:** the source's water, coast, vegetation, buildings, terrain, atmosphere, shadows, and other visible elements that may continue into illustration; exclude everything not supported by the photograph.

Treat the photo as the factual source. Treat the illustration as an interpretation of that fact.

## Automatic Direction

After building the Scene Card, proceed directly without asking the user to choose a narrative focus, photographic scope, or intervention level. Infer all three internally:

- choose the narrative focus from the visual-weight map, semantic minimum, dominant gesture, and emotional tension;
- choose a full scene, person-only crop, local water area, building cluster, other focal extraction, or connected fragments according to what best carries that focus;
- use medium abstraction by default, reduce it when identity or location would become unclear, and increase it when the semantic minimum remains unmistakable;
- honor any relevant direction the user already included, but do not pause to request additional preferences.

Carry the inferred direction through photo–illustration allocation, the abstraction map, chromatic structure, torn-paper handoff, prompt compilation, and quality review.

## Photo-Specific Prompt Compiler

Resolve these visible fields in order:

1. **Canvas:** ratio, source-colored paper surface, flat scan, and absence of mockup framing.
2. **Narrative and attention geometry:** narrative focus, dominant field, subordinate field, focal area, quiet area, and eye path.
3. **Scene invariants:** identity, pose, perspective, real light and color, and exact relationships that must remain recognizable.
4. **Photo–illustration allocation:** which irregular field remains visibly photographic and which parts become paper illustration. Use no numeric photo-area target. It is valid to retain the full scene, only a person, a local area of water, a building cluster, another focal extraction, or connected fragments whenever that choice preserves the narrative focus and semantic minimum.
5. **Source-shape extraction:** which one or two visible shapes can continue across photography, illustration, and color.
6. **Abstraction map:** what to retain, merge, omit, transform, and leave blank.
7. **Illustration field:** same-scene content, primary grammar, field extent, active printed density, complexity-compression target, restrained broken sketch/drypoint marks, and source-colored quiet areas.
8. **Chromatic structure:** the primary visual focus's readable color cue and its intensified exact hue; when no usable cue is readable, one chosen fallback—saturated red or saturated blue—plus its source-derived shape, integration mode, material, opacity, visual function, and approximate area.
9. **Torn-paper handoff:** visible hand-torn contour developed along a real coast, waterline, canopy, architecture, or other focal scene structure; fibrous fringe, source-colored paper tone, and a gradual full-color-to-halftone/drybrush/screenprint transition.
10. **Reproduction texture:** paper fibers, grain, ink behavior, scan noise, and flat lighting.
11. **Mood and hard avoids:** emotional temperature, no-added-text rule, and prohibited aesthetics.

Compile only instructions that can become visible pixels. Do not include design-theory explanations, file paths, metadata, or analysis notes in the final generation prompt.

## Minimal Abstraction Engine

### Default Abstraction Level

Use **medium abstraction** by default:

- preserve the core subject, dominant gesture, and one key spatial relationship;
- remove roughly 60–80% of small descriptive detail;
- merge repeated or adjacent forms into larger masses;
- replace realistic shading with flat ink, broken contour, sparse hatching, halftone, or paper cutout;
- allow the illustration to depart from literal scale or crop when the scene remains identifiable;
- keep at least one unmistakable source-specific feature.

Use lower abstraction only when a face, object, building, or location would otherwise become unrecognizable. Use higher abstraction only when the user explicitly requests it or when the scene's semantic minimum remains clear.

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

The illustration may simplify texture and minor descriptive detail. It may not alter a person's identity or pose, contradict the source perspective, invent unrelated scenery, or replace the original spatial logic with generic motifs. Every illustrated form outside the photograph must plausibly belong to the same scene.

## Composition System

### Art-Theory Basis

- **Figure–ground:** make positive forms legible against quiet, source-colored paper.
- **Visual balance:** balance visual weight rather than equal area.
- **Emphasis:** create one primary focal area through controlled contrast.
- **Movement:** use source lines, edges, gaze, paths, and color sequence to guide the eye.
- **Dominant–subordinate hierarchy:** balance visual weight from the narrative focus rather than assigning photography and illustration equal or preset areas.
- **Grid as scaffold:** use thirds, center axes, or golden-section points only when they reinforce source geometry.
- **Directional breathing room:** leave space in front of a gaze, path, wave, or diagonal.

### Source-Driven Layout Selection

Set no minimum or maximum photographic percentage. Choose the photographic shape, crop, placement, and scale only after identifying the narrative focus, spatial invariants, dominant gesture, and emotional temperature. Photography may dominate the poster, share it with illustration, or survive as a compact focal anchor when that best serves the particular scene.

Treat recognizable photographic detail, natural light, texture, and scene color as the truthful anchor. Halftone, drybrush, screenprint, flat color, source-colored paper, and illustration may occupy any remaining area. Judge the result by scene identity, hierarchy, and visual balance rather than an area calculation.

- **Transformative seam:** continue one real subject, horizon, path, shadow, coastline, waterline, canopy, or silhouette across the boundary as a larger illustration field.
- **Underprint passage:** let a broad low-density illustration and chromatic underprint pass behind and partly through the photograph without damaging defining detail.
- **Focal extraction:** when the narrative can be carried by a person, a local area of water, a building cluster, or another source fragment, retain only that extraction as photographic content and let same-scene illustration reconstruct the surroundings. Size and place it for identity, hierarchy, and semantic clarity rather than to meet an area quota.
- **Directional opening:** align the tear with a real gaze, path, horizon, shoreline, structural edge, or convergence and let the illustration cross it selectively.
- **Irregular fragments:** keep the core subject in the decisive fragment and connect any subordinate fragments with one shared same-scene illustration mass or chromatic structure.

Avoid a centered rectangular photo or any reusable template. Choose the composition language separately for each source from its space and emotion, then correct by actual visual weight. Never sacrifice identity, pose, perspective, real light and color, or scene logic to reach a number.

## Photo–Illustration Edge Transition

Treat the boundary as a real paper object. Use a **visible hand-torn fibrous opening as the default and primary transition** wherever the photographic anchor meets source-colored paper or abstract illustration. Develop the tear along a real coast, waterline, tree canopy, building edge, horizon, path, silhouette, or other scene structure chosen from the narrative focus. Direct transformation, speckles, or ghost marks may support the handoff, but they may not replace the tactile tear.

Build the torn edge with:

- an irregular hand-ripped contour with shallow notches, uneven rises, soft scallops, and occasional longer fiber pulls;
- a narrow feathered fringe of exposed paper fibers whose tone is reconstructed from the source palette rather than default cream or white;
- slight local thinning, abrasion, broken emulsion, or dry pigment loss near selected edge segments;
- natural asymmetry: some segments nearly straight, some softly ragged, and one or two stronger torn pressure points;
- flat scan behavior with no artificial lifted-paper depth.

Control the transition:

- Keep the active fibrous band narrow, roughly 1–4% of the poster's short edge.
- Make the torn contour visibly legible where the scene structure calls for it; do not wrap the entire photographic region or target a preset portion of its perimeter.
- Let illustration or chromatic structure cross, emerge from, or pass behind selected torn segments, while keeping the paper tear itself readable.
- Immediately beside the tear, preserve the source photograph's full natural color. Move outward through a gradual, materially uneven transition into halftone, drybrush, or screenprint; never switch abruptly into a clean digital mask.
- Use speckled dissolve, halftone crumbs, or one to three faint ghost marks only as subordinate residue near one or two compositional pressure points.
- Keep dots irregular in scale and spacing. Keep symbols incomplete, faint, nonverbal, and print-derived.
- Use paper-tone, graphite, charcoal, faded brown-black, or the existing single chromatic hue; introduce no second hue.
- Preserve a source-colored quiet field. At thumbnail size, the torn edge should create spatial and layered passage with the original image rather than becoming a decorative frame or second focal cluster.

Avoid rectangular photo pasting, clean digital clipping paths, crisp rectangular masks, digital-mask softness, uniform white borders, sticker outlines, decorative deckled frames, heavy drop shadows, curled corners, thick layered-paper depth, and torn effects applied equally around every edge.

## Chromatic Structure Engine

Use exactly one **high-chroma structural print hue** per image as part of the composition, not as a final decorative mark. Natural colors preserved or reconstructed from the source do not count as extra added hues; do not introduce a second high-chroma structural color.

### Choose the Hue

Choose the hue from the primary visual focus before consulting the overall palette:

1. Locate the face, figure, object, architectural feature, light patch, or other point that carries the narrative focus.
2. Read the clearest meaningful color on or immediately around that point. If it is identifiable and compositionally useful, intensify that same hue family into one exact high-chroma print color.
3. If no usable focal color is readable because the focus is neutral, monochrome, obscured, ambiguous, or too weak, choose exactly one fallback: clean saturated tomato red or fully saturated cobalt/ultramarine blue. Prefer red when a cool or neutral scene needs warmth, urgency, or forward emphasis; prefer blue when a warm or visually dense scene needs cool separation, calm, or spatial depth. Never use both.

Judge the chosen hue beside the source colors, paper tone, and neutral inks. Keep it structurally attached to the focal point's contour, position, shadow, direction, or surrounding negative space. Do not weaken the hue with `pale`, `muted`, `faded`, `pastel`, or `low-saturation` wording unless the user explicitly requests it, and do not substitute an arbitrary third fallback hue.

### Choose One Integration Mode

- **Source continuation:** extract a roofline, road, cloud, window, garment, shadow, plant, vehicle panel, or other source-specific form and continue it beyond the photographic edge.
- **Selective replacement:** convert one real photographic region into a flat high-chroma printed shape while preserving the surrounding scene.
- **Underprint passage:** place a broad translucent, halftone, or misregistered color field behind and partly through both photography and illustration.
- **Counterform:** derive a colored positive or negative shape from a source silhouette, gap, shadow, or quiet area.
- **Directional rhythm:** repeat or stretch one source-derived colored form along a gaze, path, railing, ridge, shoreline, or convergence.

Choose one integration mode and one primary function: focal reinforcement, counterweight, photo–illustration bridge, eye-path direction, figure–ground clarification, or semantic emphasis.

Require the chromatic structure to satisfy at least two of these tests:

- derive its contour, position, or rhythm from the supplied scene;
- touch, overlap, replace, pass behind, or pass through photography or illustration;
- cross the photo–paper boundary or transform at that boundary;
- redirect the eye path or rebalance visual weight;
- reveal or intensify a real subject, spatial relationship, atmosphere, or emotional tension.

Never use a detached rectangle, corner patch, generic circle, arbitrary bright dot, or isolated brush swatch merely to make the poster feel designed. A simple geometric shape is permitted only when it is clearly derived from or attached to source geometry. Optionally repeat the hue in one or two smaller source-anchored echoes; keep them subordinate.

### Match Area to Material

- **Opaque replacement or cut-paper form:** usually about 2–6% of the whole poster.
- **Translucent, halftone, or misregistered underprint:** usually about 6–15%.
- **Large structural color field:** usually about 10–20%; reduce opacity, neutral-ink density, and competing detail when using this range.
- Use the lower end when the photograph already contains vivid colors. Use the upper end when the source is subdued and the added hue carries a necessary structural role.
- Preserve high chroma through grain, ink bleed, broken coverage, and slight misregistration without turning the hue into neon or glossy digital color.

### Structural Removal Test

Mentally remove the added hue. If the eye path, visual balance, figure–ground relationship, photo–illustration continuity, and scene interpretation remain essentially unchanged, redesign it. The color must do compositional work.

## Visual Language

- Use a vertical 3:5 paper-poster canvas unless the user requests another ratio.
- Reconstruct the paper from the photograph's own color atmosphere using matte fibers, restrained speckles, weathering, torn edges, scan noise, and flat print texture; do not default to a large white or cream ground.
- Preserve each person's identity and pose, the photograph's perspective, natural light and color, and recognizable geometry.
- Render the illustration with selective woodcut, photocopy, halftone, xerox, risograph, letterpress, or cut-paper treatment.
- Let photography, illustration, and chromatic structure share at least one source-derived contour, axis, rhythm, or field.
- Keep paper texture subordinate to the source-derived forms and source-colored breathing room.
- Use only restrained, broken sketch and drypoint lines as supporting marks.
- Ensure every illustrated element outside the photographic region comes from the same scene.
- Keep the result flat and orthographic with diffuse light and no artificial 3D depth.
- Add no new words, letters, captions, labels, numbers, pseudo-metadata, or typographic decoration. Existing text physically present in the source photo may remain only when required for scene fidelity.

## No Added Text

Do not generate any new text or typographic element. This prohibition overrides the former micro-text convention and applies even when an editorial trace might otherwise suit the composition. If the source photograph already contains signage, lettering, or numbers, preserve them only as part of the truthful photographed scene; do not isolate, restyle, repeat, extend, or use them as decoration.

## Prompt Shape

Write the final prompt as four compact paragraphs:

1. **Canvas, narrative focus, and attention geometry:** ratio, the inferred narrative focus and abstraction strength, source-specific layout language, focal area, source-colored quiet field, eye path, and a scene-driven photo-to-illustration allocation with no numeric quota.
2. **Scene fidelity:** inferred photographic scope, core subjects, human identity and pose, perspective, key spatial invariants, real light and color, and the irregular photographic field that preserves the focal subject and semantic minimum.
3. **Same-scene illustration, chromatic structure, and torn opening:** retain/merge/omit/transform/expose decisions calibrated to the inferred abstraction strength; illustration grammar, restrained broken sketch/drypoint marks, field extent, and active density; one high-chroma hue derived from the inferred narrative focus or, when unreadable, one red-or-blue fallback, with its source shape, integration mode, material, opacity, and function; tear path along a real scene structure, fibrous band, full-color edge zone, and gradual halftone/drybrush/screenprint transition.
4. **Reproduction mood and constraints:** source-derived paper color, paper/scan texture, emotional atmosphere, no-added-text rule, and hard avoids including rectangular pasting, white borders, digital masking, unrelated scenery, stickers, and templates.

Use decisive language. State which details must disappear as clearly as which forms must remain.

## Generation Workflow

1. Inspect the supplied photo and build a Scene Card with the narrative focus, semantic minimum, human-fidelity invariants, and same-scene vocabulary.
2. Infer the photographic scope and abstraction strength, honoring any direction already supplied by the user, then proceed without asking preference questions.
3. Choose the focal area, intended eye path, and a composition language specific to this photograph's space and emotion.
4. Extract one or two source shapes that can organize photography, illustration, and color together.
5. Design an irregular photographic field that preserves the narrative focus and scene identity without targeting any fixed percentage. Retaining the full scene, only a person, local water, a building cluster, another focal extraction, or connected fragments is valid when the composition remains truthful and legible.
6. Build the Abstraction Map and calibrate it to the inferred abstraction strength.
7. Choose one primary illustration grammar using only same-scene forms; apply foliage and micro-detail compression, then set active density and source-colored breathing room.
8. Read the clearest meaningful color from the inferred narrative focus and intensify it into exactly one high-chroma structural hue. If no usable focal color is readable, select either saturated tomato red or saturated cobalt/ultramarine blue according to temperature and focal contrast; never use both. Then choose its integration mode, source shape, material, opacity, function, and area, and apply the structural removal test.
9. Design a visible hand-torn fibrous opening from the inferred narrative focus along a real coastline, waterline, canopy, building edge, or other scene structure. Preserve full source color next to it, then grade outward into halftone, drybrush, or screenprint.
10. Add restrained, interrupted sketch and drypoint marks only where they clarify the scene; add no text or template decoration.
11. Compile the four-paragraph final prompt.
12. Generate with the supplied photo as reference.
13. Inspect at normal and thumbnail scale.
14. Regenerate once with a targeted correction if necessary.
15. Return the generated image plus one brief creative rationale; include the prompt or detailed notes only when the user asks.

## Targeted Correction

Regenerate at most once, correcting only the observed failure:

- **Narrative drift:** restore the identified narrative focus and remove competing elements.
- **Identity, pose, perspective, or light/color drift:** restore the photographed person's recognizable features and posture, the source viewpoint, and the real illumination and palette.
- **Photographic anchor lost:** restore enough truthful photographic detail to recover the focal subject, identity, or defining spatial relationship; adjust by meaning and balance rather than percentage.
- **Scene loss:** restore the missing spatial invariant or source-specific form; remove any illustrated element that does not belong to the same scene.
- **Over-literal illustration:** remove most remaining nonessential detail, merge forms, break contours, and enlarge source-colored breathing room.
- **Dense foliage:** collapse individual leaves, needles, and fine twigs into one main mass, one to three branch gestures, and at most two secondary clusters.
- **Generic abstraction:** replace invented motifs with a simplified source-derived form or relationship.
- **Crowding:** reduce the illustration to one primary mass, one supporting mark, and one texture field.
- **Illustration too timid:** enlarge the field or dominant mass without adding descriptive detail.
- **Weak hierarchy:** enlarge the dominant field or simplify the subordinate field.
- **Generic composition:** redesign from the photograph's own space, gesture, and emotion instead of reusing a centered or templated layout.
- **Missing paper boundary:** restore a visibly irregular hand-torn contour along a real coast, waterline, canopy, building edge, or other source structure, with a narrow exposed-fiber fringe.
- **Abrupt or digital transition:** restore full source color beside the tear, then grade gradually into halftone, drybrush, or screenprint; remove rectangular masks, uniform white borders, and digital-mask softness.
- **Edge noise:** keep the torn fiber primary, reduce all other residue, confine speckles or ghost marks to one or two pressure points, and restore source-colored quiet paper.
- **Decorative color:** replace the detached mark with a source-derived continuation, replacement, underprint, counterform, or directional rhythm; make it pass the structural removal test.
- **Unanchored hue:** resample the primary visual focus and intensify its clearest meaningful color; if no usable focal color is readable, replace the hue with either saturated tomato red or saturated cobalt/ultramarine blue, choosing one and never both.
- **Chromatic dominance:** reduce area, opacity, or competing echoes while preserving the color's compositional function.
- **Added text or decoration:** remove all newly generated words, labels, numbers, stickers, and template ornaments.
- **Damaged photography:** restore natural color, texture, perspective, and recognizable detail.

## Hard Avoids

Avoid changing human identity or pose; changing source perspective, real light, or color; losing the scene's semantic minimum; allocating photo and illustration by a reusable numeric formula; unrelated invented scenery; literal traced illustration; individual leaf-by-leaf or needle-by-needle rendering; dense branch filigree; lace-like botanical illustration; repeated organic marks covering the field; timid peripheral illustration; full-scene photocopy; evenly detailed woodcut rendering; dense continuous hatching; complete object outlines; filler decoration; generic abstract motifs; detached corner color blocks; isolated brush swatches; arbitrary bright dots; generic geometric accents unrelated to the source; color added after the composition is solved; more than one high-chroma structural hue; using both red and blue as fallback hues; using an arbitrary third fallback hue when the focal color is unreadable; rectangular photo pasting; clean digital photo masks; crisp rectangular clipping; digital-mask softness; uniform white borders; sticker-like outlines; large white or generic cream grounds; decorative uniform deckled frames; heavy paper shadows; curled corners; dense scrapbooking; uniform dotted borders; repeated decorative icons; legible pseudo-symbol systems; multiple competing illustration styles; commercial advertising hierarchy; any new text, captions, labels, numbers, logos, CTA, or faux metadata; glossy mockups; neon; 3D; cinematic lighting; depth of field; fashion-editorial drama; cute cartoon or anime treatment; excessive sharpening; AI smoothing; template decoration; and watermarks.

## Output Format

By default, return:

```markdown
![Ryan scenes v2.2 poster](absolute-image-path-or-rendered-image)

**创作思路**

[One short Chinese paragraph explaining the source-derived composition, enlarged illustration field, and structural role of the added hue.]
```

Keep the creative rationale to one compact paragraph, usually 1–3 sentences. Describe the central visual decision and emotional intention in plain language; do not reveal the full prompt, restate every parameter, or turn it into a technical checklist.

If the user explicitly requests the prompt or detailed explanation, add only the requested items. Composition notes may use:

- Layout: [inferred narrative focus / photograph-specific composition language / scene-driven photographic field / retained photographic elements / source-colored field]
- Eye path: [entry → photographic anchor → chromatic/illustrated passage → quiet exit]
- Abstraction: [same-scene vocabulary / retain / merge / omit / transform / field extent / active density / source-colored breathing room]
- Chromatic structure: [focal color cue or red/blue fallback / source shape / integration mode / exact hue / material / opacity / function / approximate area]
- Edge: [source structure followed by tear / fibrous band / full-color edge zone / gradual print transition / crossing forms / subordinate residue]

## Quality Gate

Before returning, verify:

- Did generation proceed directly after reading the photo, without asking the user to choose a narrative focus, photographic scope, or intervention level?
- Were narrative focus, photographic scope, and abstraction strength inferred from the actual photograph and any direction already supplied by the user?
- Were those inferred decisions carried into the Scene Card, prompt, composition, and review?
- Was the photograph's narrative focus identified before choosing the composition?
- Does the result still read as the supplied scene?
- Are the semantic minimum and key spatial relationship recognizable?
- Are each visible person's identity and pose, the source perspective, and the real light and color truthful?
- Was the photographic share chosen without any fixed minimum, maximum, or preset ratio?
- If only a person, local water, a building cluster, or another focal extraction remains photographic, does it still preserve the narrative focus and scene's semantic minimum?
- Does the illustration reinterpret rather than trace the source?
- Does every illustrated element outside the photographic region belong to the same scene?
- Has most nonessential detail been removed?
- Is there one primary illustration grammar?
- Was the composition language chosen from this photograph's own space, dominant gesture, and emotion rather than from a template?
- Does the illustration carry the composition instead of appearing as a timid peripheral doodle?
- In foliage-dominant scenes, were most leaves, needles, fine twigs, and repeated organic marks merged or omitted?
- Does foliage resolve as a few large masses and directional branch gestures rather than dense filigree?
- Are sketch and drypoint lines restrained, broken, and discontinuous?
- Does source-colored breathing room clarify the forms without creating a large white or generic cream void?
- Do photography, illustration, and color share a source-derived contour, axis, rhythm, or field?
- Is a hand-torn fibrous opening visibly present at the main photo–paper handoff?
- Does the tear follow a real coastline, waterline, canopy, building edge, horizon, path, silhouette, or other focal scene structure?
- Does the torn edge show irregular contour, narrow exposed fibers, source-derived paper tone, and natural variation without becoming a uniform frame?
- Is the original photograph fully colored beside the tear, then gradually transformed into halftone, drybrush, or screenprint?
- Are direct transformation, speckles, and ghost marks subordinate to the torn-paper boundary?
- Are speckles and ghost marks confined to meaningful pressure points, faint at thumbnail size, and free of readable iconography?
- Is the boundary free of rectangular pasting, uniform white borders, clean digital clipping, digital-mask softness, sticker outlines, heavy shadows, and artificial curled-paper depth?
- Is the eye path coherent?
- Is there exactly one high-chroma structural hue, derived first from the primary visual focus when a usable color is readable?
- If the focal color was unreadable, was exactly one fallback chosen—saturated red or saturated blue—without using both or introducing a third arbitrary fallback hue?
- Are the hue's source shape, integration mode, and position justified?
- Does the chromatic structure satisfy at least two integration tests?
- Would removing the added hue weaken balance, movement, figure–ground, continuity, or meaning?
- Is the color structurally useful without becoming a detached sticker or dominant advertising device at thumbnail size?
- Is there no newly generated text, lettering, caption, label, number, sticker, or template decoration?
- Does the poster remain tactile, flat, quiet, abstract, source-derived, and non-commercial?
- Did the response include the image and one genuinely brief creative rationale?
- Was the full prompt omitted unless the user explicitly requested it?
