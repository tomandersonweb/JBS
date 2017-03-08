using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using JBS.Core.Entities;
using JBS.Core.Repositories;

namespace JBS.Persistence.StaticFile.Repositories
{
    public class BranchesRepository : IBranchesRepository
    {
        private readonly IList<Branch> _branches;

        public BranchesRepository()
        {
            _branches = new List<Branch>();

            using (StreamReader file = File.OpenText(@"..\JBS.Persistence.StaticFile\Data\Branches.json"))
            {
                string json = file.ReadToEnd();
                _branches = JsonConvert.DeserializeObject<List<Branch>>(json);
            }
        }

        public IList<Branch> GetAllBranches()
        {
            return _branches;
        }

        public Branch GetBranch(int branchId)
        {
            return _branches.Where(x => x.Number == branchId).SingleOrDefault();
        }
    }
}
