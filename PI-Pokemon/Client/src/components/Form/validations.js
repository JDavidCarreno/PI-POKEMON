const validations = (data) => {
    let error = {};

    if (data.name.length < 5 || data.name.length > 10 || /\d/.test(data.name)) {
        error.name = "The name must be between 5 and 10 characters long and cannot contain numbers."
    }

    if ( data.image.length < 1 ){
        error.image = "This field is required."
    }

    if ( !data.hp ) {
        error.hp = "This field is required."
    }

    if ( !data.attack ) {
        error.attack = "This field is required."
    }

    if( !data.defense ) {
        error.defense = "This field is required."
    }

    return error
};

export default validations;