import React from "react";
import AppListInfoMobileApp from './info-mobile-app'
import AppListStandartDevelopment from './standart-development'
import AppListWorkSpecialize from "./work-specialize";
import AppListOurProject from "./our-project";
import AppListOurWorkVideo from "./our-work-video";

const AppList = () => {
    return (
        <div>
            <main>
                <AppListInfoMobileApp/>
                <AppListStandartDevelopment/>
                <AppListWorkSpecialize/>
                <AppListOurProject/>
                <AppListOurWorkVideo/>
            </main>
        </div>
    )
};

export default AppList;