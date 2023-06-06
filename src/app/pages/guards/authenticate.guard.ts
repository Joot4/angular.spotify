import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';



export const authenticateGuard: CanActivateFn = (route, state) => {

  return true;
  
}

