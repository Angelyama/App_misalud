# Misalud

## Generación de modelos

npx sequelize-cli model:generate --name Paciente --attributes nombre:string,apellido:string,fechaNacimiento:date,sexo:string,contactoEmergenciaNombre:string,contactoEmergenciaTelefono:integer

npx sequelize-cli model:generate --name Usuario --attributes nombre:string,correo:string,password:string,verificado:boolean,ultimaSesion:date

npx sequelize-cli model:generate --name HabitosSalud --attributes usuarioId:integer,tipoHabito:string,descripcion:string,duracion:integer,fechaRegistro:date

npx sequelize-cli model:generate --name AdministracionMedicamento --attributes pacienteId:integer,medicamentoId:string,fechaHora:date,comentario:text

npx sequelize-cli model:generate --name Medicamento --attributes nombre:string,dosis:string,frecuencia:string

npx sequelize-cli model:generate --name NotificacionMedicamento --attributes pacienteId:integer,medicamentoId:string,fechaHora:date,mensaje:text,estado:string

npx sequelize-cli model:generate --name Medicacion --attributes usuarioId:integer,nombreMedicamento:string,dosis:string,hora:date,fechaRegistro:date

npx sequelize-cli model:generate --name PreferenciasUsuario --attributes usuarioId:integer,notificacionesActivas:boolean,frecuenciaRecordatorios:string

npx sequelize-cli model:generate --name Sintoma --attributes pacienteId:integer,fechaHora:date,descripcion:string,intensidad:string,duracion:integer

npx sequelize-cli model:generate --name Enfermedad --attributes nombre:string,descripcion:text,sintomas:string,tratamiento:string,pacienteId:integer,estado:string,fechaDiagnostico:date

npx sequelize-cli model:generate --name Sintomas --attributes usuarioId:integer,descripcion:text,severidad:string,duracion:integer,fechaRegistro:date

npx sequelize-cli model:generate --name Notificaciones --atributes usuarioId:integer,mensaje:text,fechaEnvio:date,tipoNotificacion:string

npx sequelize-cli model:generate --name HistorialMedico --attributes pacienteId:integer,enfermedadCronica:string,alergia:string,cirugiaFecha:date,cirugiaDetalle:text,hospitalizacionFecha:date,hospitalizacionMotivo:text

npx sequelize-cli model:generate --name ContreniaRecuperacion --attributes usuarioId:integer,token:string,fechaExpiracion:date

npx sequelize-cli model:generate --name Recordatorio --attributes usuarioId:integer,tipoRecordatorio:string,descripcion:text,hora:date,activo:boolean

---

## orden correcto

npx sequelize-cli model:generate --name Usuario --attributes nombre:string,correo:string,password_hash:string,verificado:boolean,ultima_sesion:date

npx sequelize-cli model:generate --name Paciente --attributes nombre:string,apellido:string,fecha_nacimiento:date,sexo:string,contacto_emergencia_nombre:string,contacto_emergencia_telefono:integer

npx sequelize-cli model:generate --name Medicamento --attributes nombre:string,dosis:string,frecuencia:string

npx sequelize-cli model:generate --name Enfermedad --attributes nombre:string,descripcion:text,sintomas:string,tratamiento:string,paciente_id:integer,estado:string,fecha_diagnostico:date

npx sequelize-cli model:generate --name HistorialMedico --attributes paciente_id:integer,enfermedad_cronica:string,alergia:string,cirugia_fecha:date,cirugia_detalle:text,hospitalizacion_fecha:date,hospitalizacion_motivo:text

npx sequelize-cli model:generate --name HabitosSalud --attributes usuario_id:integer,tipo_habito:string,descripcion:string,duracion:integer,fecha_registro:date

npx sequelize-cli model:generate --name PreferenciasUsuario --attributes usuario_id:integer,notificaciones_activas:boolean,frecuencia_recordatorios:string

npx sequelize-cli model:generate --name Sintomas --attributes usuario_id:integer,descripcion:text,severidad:string,duracion:integer,fecha_registro:date

npx sequelize-cli model:generate --name SintomasPaciente --attributes paciente_id:integer,fecha_hora:date,descripcion:string,intensidad:string,duracion:integer

npx sequelize-cli model:generate --name Medicacion --attributes usuario_id:integer,nombre:string,dosis:string,hora:date,fecha_registro:date

npx sequelize-cli model:generate --name AdministracionMedicamentos --attributes paciente_id:integer,medicamento_id:string,fecha_hora:date,comentario:text

npx sequelize-cli model:generate --name NotificacionMedicamentos --attributes paciente_id:integer,medicamento_id:string,fecha_hora:date,mensaje:text,estado:string

npx sequelize-cli model:generate --name Notificaciones --attributes usuario_id:integer,mensaje:text,fecha_envio:date,tipo_notificacion:string

npx sequelize-cli model:generate --name Recordatorio --attributes usuario_id:integer,tipo_recordatorio:string,descripcion:text,hora:date,activo:boolean

npx sequelize-cli model:generate --name TokenRecuperacion --attributes usuario_id:integer,token:string,fecha_expiracion:date
