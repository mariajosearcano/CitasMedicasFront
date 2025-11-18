import { Routes } from '@angular/router';
import { PacienteListar } from './paciente-listar/paciente-listar';
import { CitaListar } from './cita-listar/cita-listar';
import { MedicoListar } from './medico-listar/medico-listar';
import { PacienteCrear } from './paciente-crear/paciente-crear';
import { CitaCrear } from './cita-crear/cita-crear';
import { PacienteActualizar } from './paciente-actualizar/paciente-actualizar';
import { MedicoCrear } from './medico-crear/medico-crear';
import { CitaActualizar } from './cita-actualizar/cita-actualizar';
import { MedicoActualizar } from './medico-actualizar/medico-actualizar';

export const routes: Routes = [
    /*
    ----------------------------------------PACIENTES----------------------------------------
    */
    { path: 'paciente-listar', component: PacienteListar, title: 'Pacientes' },
    { path: 'paciente-crear', component: PacienteCrear, title: 'Paciente nuevo' },
    { path: 'paciente-actualizar/:id', component: PacienteActualizar, title: 'Pacientes' },

    /*
    -----------------------------------------MEDICOS-----------------------------------------
    */
    { path: 'medico-listar', component: MedicoListar, title: 'Medicos' },
    { path: 'medico-crear', component: MedicoCrear, title: 'Medico nuevo' },
    { path: 'medico-actualizar/:idMedico', component: MedicoActualizar, title: 'Actualizar medico' },
    /*
    ------------------------------------------CITAS------------------------------------------
    */
    { path: 'cita-listar', component: CitaListar, title: 'Citas' },
    { path: 'cita-crear/:idPaciente', component: CitaCrear, title: 'Citas' },
    { path: 'cita-actualizar/:idCita', component: CitaActualizar, title: 'Actualizar Cita' },

    { path: '', redirectTo: 'paciente-listar', pathMatch: 'full' }
];
