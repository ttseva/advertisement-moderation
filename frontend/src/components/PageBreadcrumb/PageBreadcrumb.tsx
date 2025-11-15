import { Breadcrumb } from 'antd';
import type { BreadcrumbProps } from 'antd/es/breadcrumb';
import type { ReactNode } from 'react';
import './PageBreadcrumb.css';

interface PageBreadcrumbProps {
  items: BreadcrumbProps['items'];
  action?: ReactNode;
}

export default function PageBreadcrumb({ items, action }: PageBreadcrumbProps) {
  return (
    <div className="page-breadcrumb">
      <Breadcrumb items={items} />
      {action ? <div className="page-breadcrumb__action">{action}</div> : null}
    </div>
  );
}

