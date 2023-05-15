import { DataBaseError } from 'src/common/types/DataBaseError';
import { PrismaClientError } from 'src/common/types/PrismaClienteError';
import { UniqueConstraintError } from 'src/common/types/UniqueConstraintError';

enum PrismaErros {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErros.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    default:
      return new DataBaseError(e.message);
  }
};
