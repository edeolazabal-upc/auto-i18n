import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Auto } from 'src/app/models/auto';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-list-auto',
  templateUrl: './list-auto.component.html',
  styleUrls: ['./list-auto.component.css']
})
export class ListAutoComponent implements OnInit {
  [x: string]: any;

  displayedColumns: string[] = ['id', 'brand', 'price', 'actions']

  dataSource = new MatTableDataSource<Auto>()

  constructor(
    private autoService: AutoService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.getAutos()
  }
  getAutos() {
    this.autoService.getAutos().subscribe((data: Auto[]) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
  edit(
    id: number,
    brand: string,
    price: number
  ) {
    console.log('Editando ...')

  }


  delete(
    id: any
  ) {
    this.autoService.deleteAuto(id).subscribe({
    next: (data) => {
      console.log("eliminando registro..." + id)
      this.snackBar.open('Auto eliminado correctamento', '', {
        duration: 3000
      })
      this.getAutos()
      this.router.navigate(['/listAuto'])

    },
    error: (err) => {
      console.log(err)
    },
  })

}

}
