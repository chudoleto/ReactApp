import React from "react";
import AppListInfoMobileApp from './Info-mobile-app/index'
import AppListStandartDevelopment from './Standart-development/index'
import AppListWorkSpecialize from "./Work-specialize/index";
import AppListOurProject from "./Our-project/index";
import AppListOurWorkVideo from "./Our-work-video/index";

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