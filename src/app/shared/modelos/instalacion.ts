
export interface Instalacion {
  idInstalacion: number; 
  nombreInstalacion: string;
  direccionInstalacion: string;
  telefonoInstalacion: string;
  emailInstalacion: string;
  tipoCampo1: string;  
  tipoCampo2: string;  
  tipoCampo3: string;
  serviciosInstalacion: string;
  estadoInstalacion: string; 
  passwordInstalacion: string;
  imagenInstalacion?: string; 
  torneoIds: number[]; 
  tipoDeCampo: string[]; 
}
