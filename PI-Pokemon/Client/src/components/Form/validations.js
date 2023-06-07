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

    if ( data.hp < 1 || data.hp > 100) {
        error.hp = "Hp must be between 1 and 100"
    }

    if ( !data.attack ) {
        error.attack = "This field is required."
    }

    if ( data.attack < 0 || data.attack > 150) {
        error.attack = "Attack must be between 0 and 150"
    }

    if( !data.defense ) {
        error.defense = "This field is required."
    }

    if ( data.defense < 0 || data.defense > 150) {
        error.defense = "Defense must be between 0 and 150"
    }

    return error
};

export default validations;