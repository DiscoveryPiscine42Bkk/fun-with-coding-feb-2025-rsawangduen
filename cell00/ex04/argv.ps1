# Check if arguments are supplied
if ($args.Count -eq 0) {
    Write-Output "No arguments supplied"
} else {
    # Display the first 3 arguments
    $args[0..[Math]::Min(2, $args.Count - 1)] | ForEach-Object { Write-Output $_ }
}