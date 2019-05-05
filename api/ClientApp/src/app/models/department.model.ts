export interface DepartmentItem {
  id: number,
  name: string,
  isEmpty: boolean
}

export interface DepartmentPage {
  departmentItems: DepartmentItem[];
  paginator: Paginator;
}

export interface Paginator {
  length: number;
  pageSize: number;
  pageIndex: number;
}
