#!/bin/bash

# Initialize Git Repository and Prepare for GitHub Pages Deployment
# Run this script to set up the repository for first-time deployment

echo "================================================"
echo "Remova Inc. Website - Git Initialization Script"
echo "================================================"
echo ""

# Check if already initialized
if [ -d ".git" ]; then
    echo "⚠️  Git repository already initialized."
    echo "If you want to reinitialize, remove .git directory first:"
    echo "    rm -rf .git"
    echo ""
    exit 1
fi

# Initialize git
echo "📦 Initializing Git repository..."
git init
echo ""

# Create initial commit
echo "📝 Creating initial commit..."
git add .
git commit -m "Initial commit: Remova SAP Basis corporate website

- Complete Jekyll static site structure
- 6 service pages (Basis Consulting, AMS, Install/Upgrade, S/4HANA, Performance, Security)
- Packages & SLAs page with three-tier offerings
- Methodology and deliverables documentation
- Resources page with FAQ
- 4 professional templates (Health Checklist, RCA, Change Request, DR Runbook)
- 3 mini guides (S/4HANA Migration, RPO/RTO, Upgrade De-risking)
- About and Contact pages
- Responsive design with mobile support
- No backend required - pure static site
- Ready for GitHub Pages deployment"
echo ""

echo "✅ Git repository initialized successfully!"
echo ""
echo "================================================"
echo "Next Steps:"
echo "================================================"
echo ""
echo "1. Create GitHub repository:"
echo "   - Option A: Create 'removateam.github.io' (recommended)"
echo "   - Option B: Create any repository name"
echo ""
echo "2. Add remote and push:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to repository Settings > Pages"
echo "   - Source: Deploy from branch 'main' / (root)"
echo "   - Custom domain: www.removateam.org"
echo ""
echo "4. Configure DNS:"
echo "   - CNAME: www → YOUR_USERNAME.github.io"
echo "   - Wait for DNS propagation (5-10 minutes)"
echo ""
echo "5. Test locally before deploying:"
echo "   bundle install"
echo "   bundle exec jekyll serve --port 6161"
echo "   Visit: http://127.0.0.1:6161"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
echo "================================================"

