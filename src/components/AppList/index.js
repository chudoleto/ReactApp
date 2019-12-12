import React from "react";
import "./style.css";
import AppListInfoMobileApp from './AppListInfoMobileApp'
import AppListStandartDevelopment from './AppListStandartDevelopment'
import AppListWorkSpecialize from "./AppListWorkSpecialize";
import AppListOurProject from "./AppListOurProject";
import AppListOurWorkVideo from "./AppListOurWorkVideo";

const AppList = () => {
    return (
        <div>
            <main>
                <div className="main-container">
                    <AppListInfoMobileApp/>
                    <AppListStandartDevelopment/>
                    <AppListWorkSpecialize/>
                    <AppListOurProject/>
                    <AppListOurWorkVideo/>
                </div>
            </main>
        </div>
    )
};

export default AppList;