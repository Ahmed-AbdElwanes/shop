import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
// import { Router } from 'express';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = sessionStorage.getItem('autherised');
  const router = inject(Router);
  const router2 = inject(Router);
  if (auth == 'true') {
    console.log('pathed');
    // router2.navigate(['./home']); //programatic navigation
    return true;
  } else {
    router.navigate(['/auth/login']); //programatic navigation
    return false;
  }
};
