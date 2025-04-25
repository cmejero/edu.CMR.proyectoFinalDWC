import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-alta-instalacion',
  templateUrl: './alta-instalacion.component.html',
  styleUrls: ['./alta-instalacion.component.css'],

})
export class AltaInstalacionComponent implements OnInit {
  instalacionForm: FormGroup;
  password = '';
  passwordRepetida = '';
  id!: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private ruta: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    // Inicialización del formulario
    this.instalacionForm = this.fb.group({
      idInstalacion: [null],
      nombreInstalacion: ['', Validators.required],
      direccionInstalacion: ['', Validators.required],
      emailInstalacion: ['', [Validators.required, Validators.email]],
      telefonoInstalacion: ['', Validators.required],
      passwordInstalacion: ['', Validators.required],
      repasswordInstalacion: ['', Validators.required],
      estadoInstalacion: ['', Validators.required],
      serviciosInstalacion: '',
      imagenInstalacion: null,
      tipoDeCampo: this.fb.array([this.createTipoDeCampo()]),
      torneoIds: this.fb.array([])
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      console.log('Formulario enviado', this.instalacionForm.value);
      this.apiService.getInstalacion(this.id).subscribe({
        next: (res) => {
          // Llenar los valores del formulario con la información de la instalación
          this.instalacionForm.patchValue({
            ...res,
            tipoDeCampo: [] // Evitamos conflictos con el patchValue
          });
          
          // Limpiamos el FormArray actual
          this.tipoDeCampo.clear();
          
          // Volvemos a cargar cada uno de los tipos de campo del backend
          if (Array.isArray(res.tipoDeCampo)) {
            res.tipoDeCampo.forEach((tipo: string) => {
              this.tipoDeCampo.push(this.fb.control(tipo));
            });
          }

          // Si estamos editando una instalación existente, asegurarnos de no vaciar las contraseñas
          // Asegúrate de que las contraseñas actuales se muestren en los campos, si estás editando
          if (res.passwordInstalacion) {
            this.instalacionForm.get('passwordInstalacion')?.setValue(res.passwordInstalacion);
            this.instalacionForm.get('repasswordInstalacion')?.setValue(res.passwordInstalacion);
          }
        },
        error: (err) => {
          console.error('Error al obtener instalación:', err);
          this._snackBar.open('Error al cargar la instalación', 'Cerrar');
        }
      });
    }
  }



  // Función de validación de contraseñas
  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('passwordInstalacion')?.value;
    const confirmPassword = group.get('repasswordInstalacion')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }



  createTipoDeCampo(): FormControl {
    return this.fb.control('');  // Creación de un control de tipo cadena (string)
  }

  get tipoDeCampo(): FormArray {
    return this.instalacionForm.get('tipoDeCampo') as FormArray;
  }

  addTipoDeCampo(): void {
    this.tipoDeCampo.push(this.createTipoDeCampo());
  }

  removeTipoDeCampo(i: number): void {
    this.tipoDeCampo.removeAt(i);
  }

  // Función para manejar la imagen
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        this.instalacionForm.patchValue({ imagenInstalacion: base64Image.split(',')[1] });
      };
    }
  }

  onSubmit(): void {
    if (this.instalacionForm.valid) {
      const formData = this.instalacionForm.value;

      console.log('Formulario enviado:', formData);

      if (this.id) {
        this.modificarInstalacion(formData);
      } else {
        this.agregarInstalacion(formData);
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  async agregarInstalacion(formData: any) {
    try {
      await this.apiService.createInstalacion(formData);
      this._snackBar.open('Instalación creada correctamente', 'Ok');
      this.router.navigate(['/altaInstalacion']);
    } catch (error: any) {
      console.error('Error al crear instalación:', error);
      this._snackBar.open(error?.message || 'Error al crear instalación', 'Cerrar');
    }
  }

  modificarInstalacion(formData: any) {
    this.apiService.updateInstalacion(this.id, formData).subscribe({
      next: (response) => {
        console.log('Instalación actualizada correctamente', response);
        this._snackBar.open('Instalación actualizada correctamente', 'Ok');
        this.router.navigate(['/administrador/listaInstalacion']);
      },
      error: (err) => {
        console.error('Error al actualizar instalación:', err);
        this._snackBar.open(err.message || 'Error al actualizar instalación', 'Cerrar');
      }
    });
  }
}
