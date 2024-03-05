@echo off
@title  v.111
set PATH=jre\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%
set JRE_HOME=jre
set JAVA_HOME=jre\bin
set CLASSPATH=.;dist\*
java -server -Dnet.sf.odinms.wzpath=wz tools.wztosql.DumpQuests
pause