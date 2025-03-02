import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '../loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService); // الحصول على الخدمة

  loadingService.show(); // إظهار التحميل عند بدء الطلب

  return next(req).pipe(
    finalize(() => {
      loadingService.hide(); // إخفاء التحميل عند اكتمال الطلب أو حدوث خطأ
    })
  );
};
