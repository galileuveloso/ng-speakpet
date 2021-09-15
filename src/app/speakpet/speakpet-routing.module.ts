import { Routes } from "@angular/router";
import { LoginComponent } from "./login";
import { ManageAudiosComponent } from "./manage-audios";
import { WaitingComponent } from "./waiting";

export const SpeakPetRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'manage-audios',
        component: ManageAudiosComponent
    },
    {
        path: 'waiting',
        component: WaitingComponent
    }
]