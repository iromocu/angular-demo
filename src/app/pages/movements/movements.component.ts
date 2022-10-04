import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movements } from 'src/app/models/movements.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MovementsService } from 'src/app/services/movements.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit , OnDestroy{

  displayedColumns: string[] = ['id', 'movement'];
  dataSource: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  
  constructor(private movementService: MovementsService, private lsService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.getData()
  }
  
  async getData(offSet=0, limit=150){
      const data = await this.movementService.getData(offSet, limit)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.lsService.save()
      return this.dataSource
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  ngOnDestroy(): void {
    this.lsService.delete()
  }

}
