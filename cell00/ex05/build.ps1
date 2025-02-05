# Check if arguments are supplied
if ($args.Count -eq 0) {
    Write-Output "No arguments supplied"
} else {
    # Loop through each argument and create the corresponding directory
    foreach ($arg in $args) {
        # Ensure that the argument is treated as a string and has two digits, by padding with zeroes if needed
        $formattedArg = ($arg.ToString()).PadLeft(2, '0')
        
        # Create the directory name with "ex" and the formatted argument
        $dirName = "ex$formattedArg"
        
        # Check if the directory already exists
        if (-not (Test-Path $dirName)) {
            New-Item -ItemType Directory -Name $dirName
            Write-Output "Created directory: $dirName"
        } else {
            Write-Output "Directory already exists: $dirName"
        }
    }
}
