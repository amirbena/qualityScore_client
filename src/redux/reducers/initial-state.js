const initialState = {
    petsData: {
        pets: [],
        pagination: {
            count_per_page: 20,
            total_count: 0,
            current_page: 0,
            total_pages: 0
        }
    },
    selects: {
        selectedAnimal: "Cats",
        ages: ["", "Baby", "Young", "Senior"],
        animalTypes: [],
        selectedAge: "",
        selectedType: "",
    },
    errors: {
        responseError: ""
    },
    params: {}


}

export default initialState;
