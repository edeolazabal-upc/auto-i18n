import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Auto } from 'src/app/models/auto';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.component.html',
  styleUrls: ['./add-auto.component.css']
})
export class AddAutoComponent  implements OnInit {
  public myForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private autoService: AutoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      id: [''],
      brand: ['', Validators.required],
      price:  ['', Validators.required]

    })
  }

  addAuto() {
    const auto: Auto = {
      id: 0,
      brand: this.myForm.get('brand')!.value,
      price: this.myForm.get('price')!.value
    }
    this.autoService.saveAuto(auto).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Auto creado correctamento', '', {
          duration: 3000
        })
        this.router.navigate(['/listAuto'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

}
