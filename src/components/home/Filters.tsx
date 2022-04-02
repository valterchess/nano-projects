import React from "react";
import './Home.css';
import UseScript from "../../hooks/useScript";

const homeUrl: string = 'src/components/home/js/home.js';
const filterUrl: string = 'src/components/home/js/mixitup.min.js';

const Filters = () => {
    UseScript(filterUrl);
    UseScript(homeUrl);

    return (
        <div className="home__filters">
            <span className="home__item active-home" data-filter="all">todos</span>
            <span className="home__item" data-filter=".mentor">Frontend Mentor</span>
            <span className="home__item" data-filter=".dio">Dio</span>
            <span className="home__item" data-filter=".my">Pessoais</span>
            <span className="home__item" data-filter=".others">Outros</span>
        </div>
    );
};
export default Filters;