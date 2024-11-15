var figure = {
    "data": [
        {
            "meta": {
                "columnNames": {
                    "x": "B",
                    "y": "C",
                    "text": "A"
                }
            },
            "mode": "markers+lines",
            "name": "Melting Point",
            "type": "scattergl",
            "xsrc": "psharma04:0:7ae962",
            "x": [
                "16.04",
                "30.07",
                "44.09",
                "58.12",
                "72.15",
                "86.17",
                "100.2",
                "114.2"
            ],
            "ysrc": "psharma04:0:462cb6",
            "y": [
                "-182",
                "-183",
                "-190",
                "-138",
                "-130",
                "-95",
                "-91",
                "-57"
            ],
            "xaxis": "x",
            "error_x": {
                "type": "percent",
                "color": "#636efa",
                "value": 10,
                "width": 4,
                "visible": false,
                "symmetric": true,
                "thickness": 2
            },
            "textsrc": "psharma04:0:1471da",
            "text": [
                "Methane",
                "Ethane",
                "Propane",
                "Butane",
                "Pentane",
                "Hexane",
                "Heptane",
                "Octane"
            ],
            "visible": true,
            "connectgaps": false
        },
        {
            "fill": "none",
            "meta": {
                "columnNames": {
                    "x": "B",
                    "y": "D",
                    "text": "A"
                }
            },
            "mode": "markers+lines+text",
            "name": "Boiling Point",
            "type": "scattergl",
            "xsrc": "psharma04:0:7ae962",
            "x": [
                "16.04",
                "30.07",
                "44.09",
                "58.12",
                "72.15",
                "86.17",
                "100.2",
                "114.2"
            ],
            "ysrc": "psharma04:0:60c1e8",
            "y": [
                "-164",
                "-89",
                "-42",
                "0",
                "36",
                "69",
                "98",
                "126"
            ],
            "textsrc": "psharma04:0:1471da",
            "text": [
                "Methane",
                "Ethane",
                "Propane",
                "Butane",
                "Pentane",
                "Hexane",
                "Heptane",
                "Octane"
            ],
            "visible": true
        }
    ],
    "layout": {
        "font": {
            "family": "Open Sans"
        },
        "title": {
            "text": "Melting and Boiling Points of Alkanes"
        },
        "xaxis": {
            "type": "linear",
            "range": [
                9.408331892826276,
                120.83166810717373
            ],
            "title": {
                "text": "Molecular Mass (g/mol)"
            },
            "autorange": true
        },
        "yaxis": {
            "type": "linear",
            "range": [
                -211.08360128617363,
                147.08360128617363
            ],
            "title": {
                "text": "Temperature (Degrees Celsius)"
            },
            "autorange": true
        },
        "autosize": true,
        "template": {
            "data": {
                "bar": [
                    {
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#506784"
                            },
                            "line": {
                                "color": "rgb(17,17,17)"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#2a3f5f"
                            },
                            "line": {
                                "color": "rgb(17,17,17)"
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#506784",
                            "linecolor": "#506784",
                            "endlinecolor": "#A2B1C6",
                            "minorgridcolor": "#506784",
                            "startlinecolor": "#A2B1C6"
                        },
                        "baxis": {
                            "gridcolor": "#506784",
                            "linecolor": "#506784",
                            "endlinecolor": "#A2B1C6",
                            "minorgridcolor": "#506784",
                            "startlinecolor": "#A2B1C6"
                        }
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatter": [
                    {
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "histogram": [
                    {
                        "type": "histogram",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "parcoords": [
                    {
                        "line": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        },
                        "type": "parcoords"
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ]
            },
            "layout": {
                "geo": {
                    "bgcolor": "rgb(17,17,17)",
                    "showland": true,
                    "lakecolor": "rgb(17,17,17)",
                    "landcolor": "rgb(17,17,17)",
                    "showlakes": true,
                    "subunitcolor": "#506784"
                },
                "font": {
                    "color": "#f2f5fa"
                },
                "polar": {
                    "bgcolor": "rgb(17,17,17)",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#283442",
                    "linecolor": "#506784",
                    "automargin": true,
                    "zerolinecolor": "#283442",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#283442",
                    "linecolor": "#506784",
                    "automargin": true,
                    "zerolinecolor": "#283442",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "bgcolor": "rgb(17,17,17)"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
                "plot_bgcolor": "rgb(17,17,17)",
                "paper_bgcolor": "rgb(17,17,17)",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#f2f5fa"
                },
                "sliderdefaults": {
                    "bgcolor": "#C8D4E3",
                    "tickwidth": 0,
                    "bordercolor": "rgb(17,17,17)",
                    "borderwidth": 1
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#f2f5fa",
                    "arrowwidth": 1
                },
                "updatemenudefaults": {
                    "bgcolor": "#506784",
                    "borderwidth": 0
                }
            },
            "themeRef": "PLOTLY_DARK"
        },
        "clickmode": "event+select"
    },
    "frames": []
}