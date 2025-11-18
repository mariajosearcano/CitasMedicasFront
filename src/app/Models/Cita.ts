import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Cita {
  idCita: number;
  fechaCita: Date;
  idPaciente: number;
  paciente?: Paciente;
  idMedico: number;
  medico?: Medico;
}