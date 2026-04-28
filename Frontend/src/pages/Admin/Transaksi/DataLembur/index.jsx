import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../layout";
import { Breadcrumb } from "../../../../components";

const DataLembur = () => {
    const [pegawai, setPegawai] = useState([]);

    const [form, setForm] = useState({
        employee_id: "",
        tanggal: "",
        jam_lembur: "",
        alasan: ""
    });

    useEffect(() => {
        getPegawai();
    }, []);

    const getPegawai = async () => {
        try {
            const res = await axios.get("http://localhost:5000/data_pegawai", {
            withCredentials: true
            });

            setPegawai(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { employee_id, tanggal, jam_lembur, alasan } = form;

        if (!employee_id || !tanggal || !jam_lembur || !alasan) {
            return alert("Semua field wajib diisi");
        }

        const jam = Number(jam_lembur);

        if (jam < 1 || jam > 6) {
            return alert("Jam lembur harus antara 1 sampai 6");
        }

        if (alasan.trim().length < 10) {
            return alert("Alasan minimal 10 karakter");
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const inputDate = new Date(tanggal);

        const minDate = new Date();
        minDate.setDate(today.getDate() - 7);
        minDate.setHours(0, 0, 0, 0);

        if (inputDate > today) {
            return alert("Tanggal tidak boleh di masa depan");
        }

        if (inputDate < minDate) {
            return alert("Tanggal maksimal 7 hari ke belakang");
        }

        try {
            const res = await axios.post("http://localhost:5000/lembur", form);
            alert(res.data.msg);

            setForm({
            employee_id: "",
            tanggal: "",
            jam_lembur: "",
            alasan: ""
            });

        } catch (error) {
            alert(error.response?.data?.msg || "Gagal submit");
        }
    };

    return (
        <Layout>
        <Breadcrumb pageName="Data Lembur" />

        <div className="rounded-sm border border-stroke bg-white p-6 shadow-default mt-6">
            <h3 className="mb-4 text-black font-medium">Input Data Lembur</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
            <select
                name="employee_id"
                value={form.employee_id}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            >
                <option value="">Pilih Pegawai</option>

                {pegawai.map((item) => (
                    <option key={item.id} value={item.id}>
                    {item.nama_pegawai} - {item.nik}
                    </option>
                ))}
            </select>

            <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                type="number"
                name="jam_lembur"
                placeholder="Jam Lembur"
                value={form.jam_lembur}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <textarea
                name="alasan"
                placeholder="Alasan"
                value={form.alasan}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded"
            >
                Submit
            </button>
            </form>
        </div>
        </Layout>
    );
};

export default DataLembur;