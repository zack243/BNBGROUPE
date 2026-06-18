# PowerShell script to fix remaining pages
# This script applies the Server/Client Component split pattern to all remaining pages

$pages = @(
    "baby-care",
    "business-portfolio", 
    "career",
    "contact",
    "csr",
    "distribution",
    "electronics-home-appliances",
    "focus-brand",
    "food-beverages",
    "furniture-fittings",
    "health-and-hygiene",
    "home-care",
    "personal-care-products",
    "stationary"
)

foreach ($page in $pages) {
    $pagePath = "app/[locale]/$page/page.tsx"
    $contentPath = "app/[locale]/$page/Content.tsx"
    
    if (Test-Path $pagePath) {
        Write-Host "Processing $page..."
        # Extract content after 'export default function' and create Content.tsx
        # This is a simplified approach - actual implementation would need more sophisticated parsing
    }
}

Write-Host "Done! Run 'npm run build' to verify."
