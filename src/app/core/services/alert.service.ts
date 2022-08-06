import {Injectable} from '@angular/core';
import Swal, {SweetAlertOptions} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {
  }

  /**
   *
   * @param msg
   */
  success = (msg?: string) => {
    Swal.fire(<SweetAlertOptions>{
      icon: 'success',
      title: msg ? msg : 'Success',
      showConfirmButton: false,
      timer: 1500
    });
  };

  /**
   *
   * @param msg
   */
  error = (msg?: string) => {
    Swal.fire(<SweetAlertOptions>{
      icon: 'error',
      title: msg ? msg : 'Error',
      showConfirmButton: false,
      timer: 1500
    });
  };

  info = (msg?: string) => {
    Swal.fire(<SweetAlertOptions>{
      icon: 'info',
      title: msg ? msg : 'Info',
    });
  };

  confirm() {
    return Swal.fire(<SweetAlertOptions>{
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success mx-1',
      cancelButtonClass: 'btn btn-danger mx-1',
      buttonsStyling: false
    })
  }
}
