import React from 'react';

const Form = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: false,
        employment: '',
        favColor: '',
    });

    const handleForm = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <main className="form">
            <form onSubmit={handleSubmit}>
                {/* Text Input */}
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleForm}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleForm}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleForm}
                    name="email"
                    value={formData.email}
                />
                {/* TextArea */}
                <textarea
                    placeholder="Comments"
                    onChange={handleForm}
                    name="comments"
                    value={formData.comments}
                />
                {/* Checkbox */}
                <input
                    type="checkbox"
                    id="friendly"
                    onChange={handleForm}
                    name="isFriendly"
                    checked={formData.isFriendly}
                />
                <label htmlFor="friendly">Are you friendly ?</label>
                <br />
                <br />
                {/* Radio */}
                <fieldset>
                    <legend>Are you employed ?</legend>

                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handleForm}
                        checked={formData.employment === 'unemployed'}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        onChange={handleForm}
                        checked={formData.employment === 'part-time'}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />

                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        onChange={handleForm}
                        checked={formData.employment === 'full-time'}
                    />
                    <label htmlFor="full-time">Full-time</label>
                </fieldset>
                <br />

                {/* Select Box */}
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select
                    id="favColor"
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleForm}
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                {/* Submit */}
                <br />
                <br />
                {/* <input type="submit" value="Sink it in" /> */}
                {/* button inside a form acts same as <input type="submit" /> */}
                <button>Sink it in</button>
            </form>
        </main>
    );
};

export default Form;
