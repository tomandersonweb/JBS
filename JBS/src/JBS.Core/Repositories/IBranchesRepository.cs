using JBS.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JBS.Core.Repositories
{
    public interface IBranchesRepository
    {
        IList<Branch> GetAllBranches();
        Branch GetBranch(int branchId);
    }
}
