+++
# Tag Cloud widget.
widget = "tag_cloud"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 120  # Order that this section will appear.

title = "Popular Topics"
subtitle = ""

[content]
  # Choose the taxonomy from `config.toml` to display (e.g. tags, categories)
  taxonomy = "tags"

  # Choose how many tags you would like to display (0 = all tags)
  count = 20

[design]
  # Minimum and maximum font sizes (1.0 = 100%).
  font_size_min = 0.7
  font_size_max = 2.0
  [design.background]
    # Apply a background color, gradient, or image.
    #   Uncomment (by removing `#`) an option to apply it.
    #   Choose a light or dark text color by setting `text_color_light`.
    #   Any HTML color name or Hex value is valid.

    # Background color.
    # color = "navy"

    # Background gradient.
    # gradient_start = "DeepSkyBlue"
    # gradient_end = "SkyBlue"

    # Background image.
    image = "cover3.png"  # Name of image in `static/img/`.
    image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
+++
