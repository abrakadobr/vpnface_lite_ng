import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Vpnclient } from '../vpnclient'

export class ClientsTableDataSource extends DataSource<Vpnclient> {
    
  constructor(public data: Vpnclient[],private paginator: MatPaginator, private sort: MatSort) {
    super();
  }
    
  connect(): Observable<Vpnclient[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];
    
    this.paginator.length = this.data.length;
    
    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
    
  disconnect() {}
  
  private getPagedData(data: Vpnclient[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
    
  private getSortedData(data: Vpnclient[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'code': return compare(a.code, b.code, isAsc);
        case 'blocked': return compare(!!a.blocked, !!b.blocked, isAsc);
        default: return 0;
      }
    });
  }
}
    
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
    
