import { Injectable } from '@angular/core';
import { Computadora } from '../../Interface/computadora';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ComputerManagerService {
  constructor(private http: HttpClient) {}

  putComputadora(computadora: Computadora): void {
    this.http.put('127.0.0.1:4040/carga/computadora', computadora).subscribe();
  }
}
