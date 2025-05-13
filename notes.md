# design breakdown
- template
    - metadata
        - category
        - sizes
        - bag model
        - language/fonts
    - layers
        - background
        - props/graphics
            - non-negotiable 
            - negotiable
        - personalised (background removal)
            - props/graphics (logos/products)
                - c_image_1
                - c_image_2
            - text layers (font handling)
                - shop name
                - tagline
                - promo text
                - slokam/pre-text
                - address
                - communication details
                    - contact names
                    - mobile numbers
    - additional font handling

# designs schema
```json
{
    "customer_requirements": {
        "shop_category": "clothing",
        "bags": [
            {
                "size": "10X18",
                "model": "D_CUT"
            }
        ],
        "languages": [
            "telugu",
            "english"
        ]
    },
    "customer_data": {
        "pre_text": {
            "language": "english",
            "value": "|| Om Sai Ram ||",
            "font": "Hevula"
        },
        "shop_name": {
            "language": "english",
            "value": "Raja Brothers",
        },
        "tagline": {
            "language": "english",
            "value": "Readymade clothing",
        },
        "promo_text": {
            "language": "english",
            "value": "50% off on shopping above Rs 5000/-",
        },
        "address": {
            "language": "english",
            "value": "330, Tukaram street\nMadras Main Road\nCHENNAI",
        },
        "communication_details": [
            {
                "type": "person",
                "language": "english",
                "value": "Ramudu"
            },
            {
                "type": "mobile_number",
                "value": "9986179372"
            }
        ]
    },
    "customer_artifacts": {
        "logo": "",
        "props": [
            {
                "type": "devotional",
                "location": "",
                "value": ""
            }
        ]
    },
    "personalisations": {
        "templates": [
            {
                "id": "001",
                "template_props": {
                    "prop_01": "001__prop_01__choice_01"
                },
            },
            {
                "id": "002",
                "template_props": {
                    "prop_01": "002__prop_01__choice_01"
                }
            }
        ]
    }
}
```
