import axios from "axios";
import { useState } from "react";

export default function ContactInfoForm({ children, Link }) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        country: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://candidate.nujob.info/api/v1/cp/verify", {
            email: form.email,
        });
        const { data } = await axios.post("https://candidate.nujob.info/api/v1/cp/register", {
            name: form.name,
            email: form.email,
            password: form.password,
            country: form.country,
            city: "",
            state: "",
        });
        window.location.href = `${Link}?prefilled_email=${form.email}&client_reference_id=${data}`;
        setOpen(false);
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
            >
                {children}
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 text-black">
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Country</label>
                                <select
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                >
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
                                </select>
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
