function HomeValidation(values) {
    let errors = {};

    // Add any validation logic if needed
    if (!values.someField) {
        errors.someField = "Some field is required";
    }

    return errors;
}

export default HomeValidation;
