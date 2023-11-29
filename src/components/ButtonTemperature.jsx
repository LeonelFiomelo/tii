import { useState } from "react";

export default function ButtonTemperature({temperature, setActivated}) {

    return (
        <button>
            <p>{temperature}</p>
        </button>
    )
    
}