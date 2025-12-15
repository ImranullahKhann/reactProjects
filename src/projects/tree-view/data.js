const menus = [
  {
    "label": "Dashboard",
    "to": "/dashboard"
  },
  {
    "label": "User",
    "to": "/user",
    "children": [
      {
        "label": "Profile",
        "to": "profile",
        "children": [
          {
            "label": "Personal Info",
            "to": "personal-info"
          },
          {
            "label": "Preferences",
            "to": "preferences"
          }
        ]
      }
    ]
  },
  {
    "label": "Administration",
    "to": "/admin",
    "children": [
      {
        "label": "Users",
        "to": "users"
      },
      {
        "label": "Permissions",
        "to": "permissions",
        "children": [
          {
            "label": "Roles",
            "to": "roles"
          },
          {
            "label": "Policies",
            "to": "policies"
          }
        ]
      }
    ]
  }
]

export default menus;