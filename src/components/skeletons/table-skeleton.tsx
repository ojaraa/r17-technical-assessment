import ContentLoader from 'react-content-loader'

const TableSkelton = () => {
    
  return (
       <>
      <tr className="table-row min-w-full ">
        {/* Date*/}
          <td className="size-px whitespace-nowrap">
          <div className="px-4 py-2">
            <ContentLoader
              speed={2}
              width={400}
              height={15}
              viewBox="0 0 400 15"
              backgroundColor="#34616f11"
              foregroundColor="#34616f11"
            >
              <rect x="0" y="0" rx="4" ry="4" width="400" height="15" />
            </ContentLoader>
          </div>
        </td>

        {/* Remark*/}
        <td className="size-px whitespace-nowrap">
          <div className="px-4 py-2">
            <ContentLoader
              speed={2}
              width={120}
              height={15}
              viewBox="0 0 120 15"
              backgroundColor="#34616f11"
              foregroundColor="#34616f11"
            >
              <rect x="0" y="0" rx="4" ry="4" width="120" height="15" />
            </ContentLoader>
          </div>
        </td>

        {/* Amount */}
        <td className="size-px whitespace-nowrap">
          <div className="px-4 py-2">
            <ContentLoader
              speed={2}
              width={120}
              height={15}
              viewBox="0 0 120 15"
              backgroundColor="#34616f11"
              foregroundColor="#34616f11"
            >
              <rect x="0" y="0" rx="4" ry="4" width="120" height="15" />
            </ContentLoader>
          </div>
        </td>

        {/* Currency */}
        <td className="size-px whitespace-nowrap">
          <div className="px-4 py-2">
            <ContentLoader
              speed={2}
              width={120}
              height={15}
              viewBox="0 0 120 15"
              backgroundColor="#34616f11"
              foregroundColor="#34616f11"
            >
              <rect x="0" y="0" rx="4" ry="4" width="120" height="15" />
            </ContentLoader>
          </div>
        </td>

        {/* Type */}
        <td className="size-px whitespace-nowrap">
          <div className="px-4 py-2">
            <ContentLoader
              speed={2}
              width={120}
              height={15}
              viewBox="0 0 120 15"
              backgroundColor="#34616f11"
              foregroundColor="#34616f11"
            >
              <rect x="0" y="0" rx="4" ry="4" width="120" height="15" />
            </ContentLoader>
          </div>
        </td>

      
      </tr>
    </>
  )
}

export default TableSkelton