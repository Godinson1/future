import { useMemo, FC } from "react";

export interface FileListProps {
  files: File[];
}

function list(files: File[]) {
  const label = (file: File) => `'${file.name}' of size '${file.size}' and type '${file.type}'`;
  return files.map((file) => <li key={file.name}>{label(file)}</li>);
}

export const FileList: FC<FileListProps> = ({ files }) => {
  const fileList = useMemo(() => list(files), [files]);
  //   if (files.length === 0) {
  //     return <div>Browse File</div>;
  //   }

  return <div>{fileList}</div>;
};
