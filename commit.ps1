param (
    [string]$commitMessage
)

# Disable echoing commands
$VerbosePreference = 'SilentlyContinue'

# Run Git commands
git add --all
git commit -m $commitMessage
git push -u origin main

# Re-enable echoing commands
$VerbosePreference = 'Continue'

Write-Host "Push completed!"
