import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  async get(key: string): Promise<any> {
    try {
    const result = await this.storage.get(key);
    console.log('storageGET: ' + key + ': ' + result);
    if (result != null) {
    return result;
    }
    return null;
    } catch (reason) {
    console.log(reason);
    return null;
    }
  }
}

function value(value: any) {
  throw new Error('Function not implemented.');
}
