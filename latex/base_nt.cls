\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{base_nt}[2023]

%==============================================================================
% Utilizando a classe abntex
%==============================================================================
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{abntex2}}
\ProcessOptions	
\LoadClass[11pt,openright,twoside,a4paper]{abntex2} % frente e verso


%==============================================================================
% Pacotes requeridos
%==============================================================================

% \RequirePackage{lmodern}	% Usa a fonte Latin Modern		
\RequirePackage{indentfirst}	% Indenta o primeiro parágrafo de cada seção.
\RequirePackage{nomencl}	% Lista de simbolos
\RequirePackage{color}	% Controle das cores
\RequirePackage{graphicx}	% Inclusão de gráficos
\RequirePackage{amsmath}	% pacote matemático
\RequirePackage{amsthm}	% pacote provas matemáticas
\RequirePackage{amsfonts}	% pacote matemático
\RequirePackage{amssymb}	% pacote matemático
% \RequirePackage{cleveref}
\RequirePackage[french, hyperpageref]{backref} % Pacote para referenciar o número das páginas onde as citações ocorreram.
\RequirePackage[alf]{abntex2cite}	% Citações padrão ABNT
\RequirePackage{float}	% pacote para posicionamento de figuras
\RequirePackage{caption}	% pacote para posicionamento de figuras
\RequirePackage{newfloat}	% pacote para posicionamento de figuras
\RequirePackage{titlesec}	% Pacote para formatar os títulos dos capítulos, seções, etc.
\RequirePackage{fancyhdr}	% Pacote para formatar os cabeçalhos e rodapés

\RequirePackage{listings} % Pacote para formatar código-fonte
\RequirePackage{algorithm} % Pacote para formatar algoritmos
\RequirePackage{algpseudocode} % Pacote para formatar algoritmos
% ---
% Carregue o pacote "makeidx" para criar o índice de palavras-chave
\RequirePackage{makeidx}
% ---
\usepackage[T1]{fontenc}
\usepackage{titletoc}
\usepackage{titlesec}

\renewcommand{\backrefpagesname}{Citado na(s) página(s):~}
% Texto padrão antes do número das páginas
\renewcommand{\backref}{}
% Define os textos da citação
\renewcommand*{\backrefalt}[4]{
    \ifcase #1 %
        Nenhuma citação no texto.%
    \or
        Citado na página #2.%
    \else
        Citado #1 vezes nas páginas #2.%
    \fi}%

% alterando o aspecto da cor azul
\definecolor{blue}{RGB}{41,5,195}

% ---
% Altera as margens padrões
% ---
\setlrmarginsandblock{3cm}{3cm}{*}
\setulmarginsandblock{3cm}{3cm}{*}
\checkandfixthelayout
% ---

% --- 
% Espaçamentos entre linhas e parágrafos 
% --- 

% O tamanho do parágrafo é dado por:
\setlength{\parindent}{1.3cm}

% Controle do espaçamento entre um parágrafo e outro:
\setlength{\parskip}{0.3cm}  % tente também \onelineskip

% Espaçamento simples
\SingleSpacing
  
% resumo em inglês
\newcommand{\insereAbstract}[2]{
    \renewcommand{\resumoname}{Résumé}
		\begin{resumoumacoluna}
			\begin{otherlanguage*}{english}
				#1
				%\par
				%reduce font size to small
				%\begin{tiny}
					%\noindent\textbf{Keywords:} #2% Insere as palavras-chave
				%\end{tiny}
			\end{otherlanguage*}  
		\end{resumoumacoluna}
}

%==============================================================================
% Definição dos ambientes matemáticos
%==============================================================================

\newtheorem{teorema}{Teorema}
\newtheorem{proposicao}{Proposição}
\newtheorem{lema}{Lema}
\newtheorem{corolario}{Corolário}
\newtheorem{exemplo}{Exemple}
\newtheorem{observacao}{Observação}
\newtheorem{definicao}{Definição}
\newtheorem{axioma}{Axioma}
\newenvironment{demonstracao}{\begin{proof}[Demonstração]}{\end{proof}}

%==========================================================

%QUADRO

% Defina um novo tipo de float chamado "quadro"
\DeclareFloatingEnvironment[fileext=qdr,placement={!ht},name=Quadro]{quadro}


\captionsetup[quadro]{position=top, labelsep=endash, font=footnotesize}

%ALGORITMO
\floatstyle{ruled}
\newfloat{algoritmo}{htbp}{alg}[section]
\renewcommand{\thealgoritmo}{\thesection.\@arabic\c@algoritmo}
\floatname{algorithm}{Algor\'{\i}tmo}

%CODIGO
\floatstyle{ruled}
\newfloat{codigo}{htbp}{cod}[section]
\renewcommand{\thecodigo}{\thesection.\@arabic\c@codigo}
\floatname{codigo}{C\'{o}digo}

\captionsetup[codigo]{position=top, labelsep=endash}
\captionsetup[algoritmo]{position=top, labelsep=endash}


\ifthenelse{\equal{\ABNTEXisarticle}{true}}{%
\counterwithout{section}{chapter}
\counterwithout{quadro}{section}
\counterwithout{algoritmo}{section}
\counterwithout{codigo}{section}
}

\makeatletter
\hypersetup{
         %pagebackref=true,
        pdftitle={\@title}, 
        pdfauthor={\@author},
        pdfsubject={Modelo de artigo científico com abnTeX2},
        pdfcreator={LaTeX with abnTeX2},
        pdfkeywords={abnt}{latex}{abntex}{abntex2}{atigo científico}, 
        colorlinks=true,       		% false: boxed links; true: colored links
        linkcolor=black,          	% color of internal links
        citecolor=blue,        		% color of links to bibliography
        filecolor=magenta,      		% color of file links
        urlcolor=blue,
        bookmarksdepth=4
}
\makeatother

\makeindex

% -- Bandeau dessus de page
\makeatletter
\newcommand{\evento}[1]{\def\@evento{#1}}
\def\@evento{}

\pagestyle{fancyplain}
\fancyhf{}
\fancyhead[L]{\@evento} % texte de la page
\fancyhead[R]{\thepage} % numéro de page
%\renewcommand\headrulewidth{0pt}% default ist .4pt
\renewcommand{\plainheadrulewidth}{1pt}
\makeatother

\AtBeginDocument{
    \chapterstyle{default}
    \pretextual
    \mainmatter
}

% Estilo personalizado para capitulo(bibliografia)

\titleformat{\chapter}
{\normalfont\Large\bfseries\filcenter\MakeUppercase}
  {\thechapter}{1em}{}

% Estilo personalizado para seções
\titleformat{\section}
  {\normalfont\Large\bfseries}{\thesection}{1em}{}
  % Estilo personalizado para subseções
\titleformat{\subsection}
{\normalfont\large\bfseries}{\thesubsection}{1em}{}

% Estilo personalizado para subsubseções
\titleformat{\subsubsection}
{\normalfont\normalsize\itshape}{\thesubsubsection}{1em}{}

\newcommand{\customtableofcontents}{%
    %\centering
    \Large
    \vspace{0.5em}
    \hrule
    \vspace{2em}
    \tableofcontents
    %\raggedright
}

\sffamily