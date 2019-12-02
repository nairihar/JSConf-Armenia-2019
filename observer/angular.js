// Controller 1
$scope.$on('nameChanged', (event, args) => {
    // ..
})

// ...

// Controller 2
$scope.$emit('nameChanged', { name })
