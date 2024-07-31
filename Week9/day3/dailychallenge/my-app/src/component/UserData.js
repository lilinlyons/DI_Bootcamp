import React, { useState } from 'react';

const UserData = (props) => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        age: '',
        gender: '',
        diet: [],
        destination: ''
    });

    const handleSubmit = (event) => {
        console.log('Form submitted:', formData);
    };

    const handleChange = (event) => {
        const { id, name, type, value, checked } = event.target;
        setFormDa
        ta(prevState => {
            if (type === 'checkbox') {
                return {
                    ...prevState,
                    diet: checked
                        ? [...prevState.diet, id]
                        : prevState.diet.filter(d => d !== id)
                };
            } else if (type === 'radio') {
                return {
                    ...prevState,
                    [name]: value
                };
            }
            return {
                ...prevState,
                [id]: value
            };
        });
    };

    return (
        <>
            <form method="GET" onSubmit={handleSubmit}>
                <InputWithLabel
                    id="name"
                    label="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
                <InputWithLabel
                    id="lastname"
                    label="Lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleChange}
                />
                <InputWithLabel
                    id="age"
                    label="Age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                />
                <InputWithLabel
                    id="gender"
                    label="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                />
                <InputWithLabel
                    id="diet"
                    label="Dietary restriction"
                    value={formData.diet}
                    onChange={handleChange}
                />
                <InputWithLabel
                    id="destination"
                    label="Destination"
                    value={formData.destination}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>

            <div className="form-data-box">
                <h2>Form Data</h2>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </>
    );
};

const InputWithLabel = (props) => {
    const { id, label, type, value, onChange } = props;

    if (id === 'destination') {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    list="location"
                    value={value}
                    onChange={onChange}
                />
                <datalist id="location">
                    <option value="UK" />
                    <option value="USA" />
                    <option value="Israel" />
                    <option value="South Africa" />
                    <option value="France" />
                </datalist>
            </>
        );
    } else if (id === 'gender') {
        return (
            <>
                <label>{label}</label>
                <div>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={value === 'Male'}
                        onChange={onChange}
                    />
                    <label htmlFor="male">Male</label><br />
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={value === 'Female'}
                        onChange={onChange}
                    />
                    <label htmlFor="female">Female</label>
                </div>
            </>
        );
    } else if (id === 'diet') {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <div>
                    <input
                        type="checkbox"
                        id="veg"
                        name="diet"
                        checked={value.includes('veg')}
                        onChange={onChange}
                    />
                    <label htmlFor="veg">Vegetarian</label><br />
                    <input
                        type="checkbox"
                        id="lacto"
                        name="diet"
                        checked={value.includes('lacto')}
                        onChange={onChange}
                    />
                    <label htmlFor="lacto">Lactose Free</label><br />
                    <input
                        type="checkbox"
                        id="nuts"
                        name="diet"
                        checked={value.includes('nuts')}
                        onChange={onChange}
                    />
                    <label htmlFor="nuts">Nuts Free</label>
                </div>
            </>
        );
    } else {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </>
        );
    }
};

export default UserData;
