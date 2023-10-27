import React, { useState } from "react";

export default function DatePicker() {
    const [ date, setDate ] = useState("");

    return (
        <div className="form-group">
            <label className="mb-2 mt-2">Data de Nascimento:</label>
            <input
                className="form-control"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                required
            />
        </div>
    );
}
